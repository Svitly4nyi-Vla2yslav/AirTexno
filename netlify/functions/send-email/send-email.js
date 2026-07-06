// send-email.js
const nodemailer = require('nodemailer');
const { Pool } = require('pg');

const LEAD_SITE = 'airtexno';

const LEADS_TABLE = process.env.LEADS_TABLE;
const TABLE_RE = /^[a-z_][a-z0-9_]*\.[a-z_][a-z0-9_]*$/i;
if (LEADS_TABLE && !TABLE_RE.test(LEADS_TABLE)) {
  throw new Error(`Invalid LEADS_TABLE format: ${LEADS_TABLE}`);
}

let pool = null;
function getPool() {
  if (!pool && process.env.DATABASE_URL) {
    const cleaned = process.env.DATABASE_URL.replace(/([?&])sslmode=[^&]*(&|$)/g, (_m, p1, p2) =>
      p1 === '?' && p2 === '' ? '' : p1 === '?' ? '?' : p2,
    );
    pool = new Pool({
      connectionString: cleaned,
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10_000,
    });
  }
  return pool;
}

async function insertLead(event, formData) {
  const p = getPool();
  if (!p || !LEADS_TABLE) return;
  const ua = event.headers['user-agent'] || null;
  const xff = event.headers['x-forwarded-for'];
  const ip = xff ? xff.split(',')[0].trim() : null;

  const standardKeys = new Set([
    'name',
    'email',
    'phone',
    'service',
    'details',
    'utm_source',
    'landing_page',
    'submitted_page',
  ]);
  const extra = {};
  for (const [key, value] of Object.entries(formData)) {
    if (!standardKeys.has(key)) extra[key] = value;
  }
  const extraJson = Object.keys(extra).length > 0 ? JSON.stringify(extra) : null;

  await p.query(
    `INSERT INTO ${LEADS_TABLE}
       (name, phone, email, service_slug, service_name, city_slug, city_name, message, source, page, user_agent, ip, site, extra)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14::jsonb)`,
    [
      formData.name || null,
      formData.phone || null,
      formData.email || null,
      null,
      formData.service || null,
      null,
      null,
      formData.details || null,
      formData.utm_source || null,
      formData.submitted_page || formData.landing_page || null,
      ua,
      ip,
      LEAD_SITE,
      extraJson,
    ],
  );
}

exports.handler = async function (event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' }),
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method Not Allowed' }) };
  }

  // Парсинг тіла
  let formData;
  try {
    formData = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
  } catch (err) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Invalid JSON body', error: err.message }),
    };
  }

  // Простенька валідація
  if (!formData || !formData.service || !formData.name || !formData.email) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({ message: 'Missing required fields: service, name, email' }),
    };
  }

  // Перевірка env
  const { GMAIL_USER, GMAIL_PASS } = process.env;
  if (!GMAIL_USER || !GMAIL_PASS) {
    console.error('Missing email credentials in environment');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ message: 'Email credentials not configured' }),
    };
  }

  // Таймзона (можна задати через EMAIL_TIMEZONE)
  const tz = 'America/Los_Angeles';

  // Якщо клієнт передав timestamp у UTC (наприклад: formData.timestampUTC) — використаємо його,
  // інакше беремо поточний час сервера.
  const baseDate = formData.timestampUTC ? new Date(formData.timestampUTC) : new Date();

  const submissionDate = baseDate.toLocaleString('en-US', {
    timeZone: tz,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  // Підготовка транспорту
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS, // зазвичай app password
    },
  });

  // Lead source / attribution (UTM tags + ad-click IDs captured on the landing page)
  const attributionFields = [
    ['Source', formData.utm_source],
    ['Medium', formData.utm_medium],
    ['Campaign', formData.utm_campaign],
    ['Term (keyword)', formData.utm_term],
    ['Content', formData.utm_content],
    ['Google Click ID (gclid)', formData.gclid],
    ['Google Click ID (gbraid)', formData.gbraid],
    ['Google Click ID (wbraid)', formData.wbraid],
    ['Facebook Click ID (fbclid)', formData.fbclid],
  ];
  const presentAttribution = attributionFields.filter(([, value]) => value);
  const hasAttribution = presentAttribution.length > 0;

  const attributionHtml = hasAttribution
    ? presentAttribution
        .map(([label, value]) => `<p><strong>${label}:</strong> ${escapeHtml(value)}</p>`)
        .join('\n    ')
    : '<p><em>Direct / no campaign data</em></p>';

  const attributionText = hasAttribution
    ? presentAttribution.map(([label, value]) => `${label}: ${value}`).join('\n')
    : 'Direct / no campaign data';

  // Підготовка вмісту листа
  const mailHtml = `
    <h2>New Service Request</h2>
    <p><strong>Service Type:</strong> ${escapeHtml(formData.service)}</p>
    <p><strong>Name:</strong> ${escapeHtml(formData.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(formData.email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(formData.phone || '—')}</p>
    <p><strong>Location / Address:</strong> ${escapeHtml(formData.location || '—')}</p>
    <p><strong>Appliance:</strong> ${escapeHtml(formData.appliance || '—')}</p>
    <p><strong>Brand:</strong> ${escapeHtml(formData.brand || '—')}</p>
    <p><strong>Power Type:</strong> ${escapeHtml(formData.power || '—')}</p>
    <p><strong>Additional Details:</strong> ${escapeHtml(formData.details || 'None')}</p>
    <hr />
    <h3>Lead Source</h3>
    ${attributionHtml}
    <p><strong>Landing Page:</strong> ${escapeHtml(formData.landing_page || '—')}</p>
    <p><strong>Submitted From:</strong> ${escapeHtml(formData.submitted_page || '—')}</p>
    <p><strong>Referrer:</strong> ${escapeHtml(formData.referrer || '—')}</p>
    <hr />
    <p><strong>Submission Date:</strong> ${submissionDate}</p>
  `;

  const mailText = `
New Service Request
Service Type: ${formData.service}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || '—'}
Location: ${formData.location || '—'}
Appliance: ${formData.appliance || '—'}
Brand: ${formData.brand || '—'}
Power Type: ${formData.power || '—'}
Additional Details: ${formData.details || 'None'}

--- Lead Source ---
${attributionText}
Landing Page: ${formData.landing_page || '—'}
Submitted From: ${formData.submitted_page || '—'}
Referrer: ${formData.referrer || '—'}

Submission Date: ${submissionDate} (${tz})
Timestamp used (UTC): ${baseDate.toISOString()}
  `;

  const mailOptions = {
    from: GMAIL_USER,
    to: 'Airtexnola@gmail.com', // змінити при потребі
    subject: `New Service Request: ${formData.service} for ${formData.appliance || '—'}${
      formData.utm_campaign ? ` — ${formData.utm_campaign}` : ''
    }`,
    text: mailText,
    html: mailHtml,
    replyTo: formData.email, // щоб можна було відповісти клієнту напряму
  };

  const [mailResult, pgResult] = await Promise.allSettled([
    transporter.sendMail(mailOptions),
    insertLead(event, formData),
  ]);

  if (pgResult.status === 'rejected') {
    console.error('pg insert failed:', pgResult.reason);
  }

  if (mailResult.status === 'fulfilled') {
    console.log('Email sent:', mailResult.value.messageId);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Email sent successfully', messageId: mailResult.value.messageId }),
    };
  }

  const error = mailResult.reason;
  console.error('Error sending email:', error);
  return {
    statusCode: 500,
    headers,
    body: JSON.stringify({
      message: 'Error sending email',
      error: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    }),
  };
};

// Невелика утиліта для уникнення XSS при вставці в HTML
function escapeHtml(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

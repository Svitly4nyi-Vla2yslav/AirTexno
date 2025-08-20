const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'CORS preflight successful' })
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' })
    };
  }

  try {
    console.log('Environment variables check:', {
      user: process.env.GMAIL_USER ? 'Set' : 'Not set',
      pass: process.env.GMAIL_PASS ? 'Set' : 'Not set'
    });

    const formData = JSON.parse(event.body);
    console.log('Form data received:', formData);
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      throw new Error('Email credentials not configured');
    }

    // ВИПРАВЛЕНА ПОМИЛКА: createTransporter -> createTransport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'Airtexnola@gmail.com',
      subject: `New Service Request: ${formData.service} for ${formData.appliance}`,
      html: `
        <h2>New Service Request</h2>
        <p><strong>Service Type:</strong> ${formData.service}</p>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        <p><strong>Appliance:</strong> ${formData.appliance}</p>
        <p><strong>Brand:</strong> ${formData.brand}</p>
        <p><strong>Power Type:</strong> ${formData.power}</p>
        <p><strong>Additional Details:</strong> ${formData.details || 'None'}</p>
        <p><strong>Submission Date:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Email sent successfully',
        messageId: info.messageId 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Error sending email', 
        error: error.message,
        details: process.env.NODE_ENV === 'development' ? error.stack : undefined
      })
    };
  }
};

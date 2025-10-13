// src/lib/metaPixel.ts
// Антиконфлікт із GTM: спершу чекаємо fbq, який міг підкинути GTM.
// Якщо не з’явився за таймаут — вантажимо свій фолбек.
// Плюс: антидубль подій та захист від подвійного init.

const PIXEL_ID = '659265680303874';
const WAIT_FOR_GTM_MS = 1500;

let bootstrapInjected = false;
let pixelInitialized = false;
let triedFallback = false;

function wait(ms: number) {
  return new Promise<void>(res => setTimeout(res, ms));
}

function isAdConsentGranted(): boolean {
  try {
    const settingsRaw = localStorage.getItem('cookieSettings');
    if (!settingsRaw) return false;
    const s = JSON.parse(settingsRaw);
    return s?.advertising?.enabled === true;
  } catch {
    return false;
  }
}

function injectBootstrapOnce() {
  if (bootstrapInjected) return;

  (function (f: any, b: Document, e: string, v: string, n: any, t: HTMLScriptElement, s: HTMLScriptElement) {
    if (f.fbq && (f.fbq as any).version) return; // уже є робочий fbq (ймовірно, від GTM)
    if (f.fbq && !(f.fbq as any).version && Array.isArray((f.fbq as any).queue)) {
      // є «заготовка» fbq — не дублюємо
      return;
    }
    n = function () {
      (n as any).callMethod ? (n as any).callMethod.apply(n, arguments) : (n as any).queue.push(arguments);
    };
    (n as any).queue = [];
    (n as any).loaded = true;
    (n as any).version = '2.0';
    f.fbq = n;
    t = b.createElement(e) as HTMLScriptElement; t.async = true; t.src = v;
    s = b.getElementsByTagName(e)[0] as HTMLScriptElement; s.parentNode?.insertBefore(t, s);
  })(window as any, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js', null as any, null as any, null as any);

  bootstrapInjected = true;
}

// Примітивний антидубль: подія не стріляє повторно 5 секунд
function guardEvent(name: string): boolean {
  window.__fbSent = window.__fbSent || {};
  if (window.__fbSent[name]) return false;
  window.__fbSent[name] = true;
  setTimeout(() => {
    if (window.__fbSent) window.__fbSent[name] = false;
  }, 5000);
  return true;
}

async function ensureFbqAvailable(): Promise<void> {
  // Якщо GTM уже дав fbq з версією — добре
  if (typeof window.fbq === 'function' && (window.fbq as any).version && !pixelInitialized) {
    return;
  }

  // Даємо час GTM перш ніж робити фолбек
  if (!triedFallback) {
    await wait(WAIT_FOR_GTM_MS);
  }

  // Якщо досі немає — інжектимо свій завантажувач
  if (!(typeof window.fbq === 'function' && (window.fbq as any).version)) {
    injectBootstrapOnce();
    triedFallback = true;
    // трошки почекаємо завантаження fbevents.js
    await wait(200);
  }
}

export async function ensurePixelReady(): Promise<void> {
  if (pixelInitialized) return;
  if (!isAdConsentGranted()) return;

  await ensureFbqAvailable();

  if (typeof window.fbq === 'function') {
    try {
      // Безпечний init (якщо GTM вже інітнув, виклик просто не зашкодить)
      window.fbq('init', PIXEL_ID);
    } catch {
      // Якщо впаде через повторний init — просто позначимо стан як інітнений
    } finally {
      pixelInitialized = true;
    }
  }
}

export async function trackPageView() {
  await ensurePixelReady();
  if (typeof window.fbq === 'function' && guardEvent('PageView')) {
    window.fbq('track', 'PageView');
  }
}

export async function trackLead() {
  await ensurePixelReady();
  if (typeof window.fbq === 'function' && guardEvent('Lead')) {
    window.fbq('track', 'Lead');
  }
}

export async function trackContactPhone() {
  await ensurePixelReady();
  if (typeof window.fbq === 'function' && guardEvent('Contact_phone')) {
    window.fbq('track', 'Contact', { contact_type: 'phone' });
  }
}

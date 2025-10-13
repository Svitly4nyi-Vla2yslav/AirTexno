// src/lib/metaPixel.ts
// Контрольоване підключення Meta Pixel з повагою до згоди користувача

const PIXEL_ID = '659265680303874';

let scriptBootstrapped = false;
let scriptLoaded = false;
let pixelInitialized = false;

function appendBootstrap() {
  if (scriptBootstrapped) return;
  (function (f: any, b: Document, e: string, v: string, n: any, t: HTMLScriptElement, s: HTMLScriptElement) {
    if (f.fbq) return;
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
  scriptBootstrapped = true;
}

function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.async = true;
    s.src = src;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error('Meta Pixel script failed to load'));
    document.head.appendChild(s);
  });
}

function isAdConsentGranted(): boolean {
  try {
    const settingsRaw = localStorage.getItem('cookieSettings');
    if (!settingsRaw) return false;
    const settings = JSON.parse(settingsRaw);
    return settings?.advertising?.enabled === true;
  } catch {
    return false;
  }
}

export async function ensurePixelReady(): Promise<void> {
  if (pixelInitialized) return;
  if (!isAdConsentGranted()) return;

  appendBootstrap();

  if (!scriptLoaded) {
    await loadScript('https://connect.facebook.net/en_US/fbevents.js');
    scriptLoaded = true;
  }

  if (!pixelInitialized && typeof window.fbq === 'function') {
    window.fbq('init', PIXEL_ID);
    pixelInitialized = true;
  }
}

export async function trackPageView() {
  await ensurePixelReady();
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'PageView');
  }
}

export async function trackLead() {
  await ensurePixelReady();
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Lead');
  }
}

export async function trackContactPhone() {
  await ensurePixelReady();
  if (typeof window.fbq === 'function') {
    window.fbq('track', 'Contact', { contact_type: 'phone' });
  }
}

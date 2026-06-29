// Lead attribution: capture UTM tags + ad-click IDs from the entry URL so every
// form submission can be tied back to the campaign / ad it came from.

export interface Attribution {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  landing_page?: string;
  referrer?: string;
  first_seen?: string;
}

const STORAGE_KEY = 'airtexno_attribution';

const TRACKING_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'gclid',
  'gbraid',
  'wbraid',
  'fbclid',
];

/**
 * Reads tracking params from the current URL and persists them for the session.
 * Call on app load and on route changes. The first ad-click context is kept:
 * a later param-less internal navigation will NOT overwrite it, so the original
 * campaign attribution survives across pages within the visit.
 */
export const captureAttribution = (): void => {
  if (typeof window === 'undefined') return;

  try {
    const params = new URLSearchParams(window.location.search);
    const hasTracking = TRACKING_PARAMS.some(key => params.get(key));
    const existing = sessionStorage.getItem(STORAGE_KEY);

    // Keep the first ad-click context — don't let an internal navigation
    // without params clobber an already-captured campaign.
    if (existing && !hasTracking) return;

    const data: Attribution = existing ? JSON.parse(existing) : {};

    TRACKING_PARAMS.forEach(key => {
      const value = params.get(key);
      if (value) (data as Record<string, string>)[key] = value;
    });

    // Landing page = the page where tracking was first seen (or first visit).
    if (hasTracking || !data.landing_page) {
      data.landing_page = window.location.href;
      data.referrer = document.referrer || 'direct';
    }
    if (!data.first_seen) data.first_seen = new Date().toISOString();

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage unavailable (private mode / blocked) — fail silently.
  }
};

/** Returns the stored attribution, or an empty object if none / unavailable. */
export const getAttribution = (): Attribution => {
  if (typeof window === 'undefined') return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
};

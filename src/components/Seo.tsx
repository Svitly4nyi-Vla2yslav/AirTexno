import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://airtexno.com';

function normalizePath(pathname: string) {
  const normalized = pathname.replace(/\/{2,}/g, '/');
  if (normalized !== '/' && normalized.endsWith('/')) {
    return normalized.slice(0, -1);
  }
  return normalized;
}

export default function Seo() {
  const { pathname } = useLocation();
  const cleanPath = normalizePath(pathname);
  const canonical = `${SITE_URL}${cleanPath}`;

  return (
    <Helmet>
      <link rel='canonical' href={canonical} />
    </Helmet>
  );
}

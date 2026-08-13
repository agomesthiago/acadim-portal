import type { NextConfig } from 'next';

const isDev = process.env.NODE_ENV === 'development';

// Security headers applied to all routes
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    // Protect against clickjacking — only allow same-origin iframes
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    // Prevent MIME type sniffing
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    // Only send full referrer to same origin; abbreviated to origin for cross-origin
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    // Content-Security-Policy: hardened for this portal.
    // Explicitly allows VLibras (vlibras.gov.br e cdn.jsdelivr.net) script, connect, style, img e frame sources.
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://vlibras.gov.br https://*.vlibras.gov.br https://cdn.jsdelivr.net`.replace(/\s+/g, ' ').trim(),
      "style-src 'self' 'unsafe-inline' fonts.googleapis.com https://vlibras.gov.br https://*.vlibras.gov.br https://cdn.jsdelivr.net",
      "font-src 'self' fonts.gstatic.com https://vlibras.gov.br https://*.vlibras.gov.br https://cdn.jsdelivr.net",
      "img-src 'self' data: blob: https: https://vlibras.gov.br https://*.vlibras.gov.br https://cdn.jsdelivr.net *.scielo.br *.ncbi.nlm.nih.gov *.wixstatic.com *.myotonic.org *.curecmd.org *.mda.org *.parentprojectmd.org *.fshdsociety.org *.genome.gov *.jain-foundation.org *.muscular-dystrophy.org *.musculardystrophynews.com *.rarediseases.org *.heart.org *.fda.gov",
      "connect-src 'self' ws: wss: https://vlibras.gov.br https://*.vlibras.gov.br https://cdn.jsdelivr.net",
      "frame-src 'self' https://vlibras.gov.br https://*.vlibras.gov.br https://cdn.jsdelivr.net",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Remove "X-Powered-By: Next.js" response header to reduce fingerprinting
  poweredByHeader: false,

  async headers() {
    return [
      {
        // Apply security headers to all routes except internal Next.js assets
        source: '/((?!_next/static|_next/image|favicon.ico).*)',
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;

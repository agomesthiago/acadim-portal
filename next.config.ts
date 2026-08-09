import type { NextConfig } from 'next';

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
    // Restrict browser feature access — camera/mic/geo not needed for this portal
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  // NOTE: Content-Security-Policy is MANUAL REQUIRED.
  // The app uses dangerouslySetInnerHTML for JSON-LD schema and loads VLibras
  // from an external script (humanitec.gov.br). A CSP must be designed to
  // allow these without blocking, and tested before deployment.
  //
  // NOTE: HSTS (Strict-Transport-Security) is BLOCKED at Next.js config level.
  // It should be set at the CDN/reverse-proxy layer (Vercel, Nginx, Cloudflare).
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

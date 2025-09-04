export const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'placehold.co',
      pathname: '/**',
    },
  ],
  dangerouslyAllowSVG: true, // Enable SVG images
};
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build', // change .next to build
}

export default nextConfig

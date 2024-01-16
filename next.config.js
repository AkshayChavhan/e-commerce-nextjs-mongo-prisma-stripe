/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'firebasestorage.googleapis.com' },
        { hostname: 'm.media-amazon.com' },
        { hostname: 'lh3.googleusercontent.com' }
      ],
    },
  };

module.exports = nextConfig

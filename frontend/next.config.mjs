/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@react-three/fiber', 'three'],
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    },
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;

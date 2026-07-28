/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@react-three/fiber', 'three'],
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'i.pinimg.com' },
            { protocol: 'https', hostname: 'upload.wikimedia.org' },
            { protocol: 'https', hostname: 'cdn.simpleicons.org' },
            { protocol: 'https', hostname: 'ui-avatars.com' },
            { protocol: 'https', hostname: 'i.pravatar.cc' },
        ],
    },
    experimental: {
        optimizeCss: true,
    },
};

export default nextConfig;

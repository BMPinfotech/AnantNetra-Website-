/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['@react-three/fiber', 'three'],
    // ESM-only server SDK: load it from node_modules at runtime instead of
    // bundling it. This also keeps it structurally out of client bundles.
    serverExternalPackages: ['@quantiqen/sdk'],
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
        // `optimizeCss` requires the optional `critters` package, which is not
        // installed. Enabling it in dev makes every page render 500; keep the
        // production optimization while leaving local dev dependency-free.
        optimizeCss: process.env.NODE_ENV === 'production',
    },
    // The QUANTIQEN SDK is Node-only (it imports `node:crypto`). Next compiles
    // `instrumentation.ts` for the Edge runtime too; alias the SDK to an empty
    // module there so the Edge compilation never tries to resolve Node builtins.
    // The runtime guard in `src/instrumentation.ts` prevents execution anyway.
    webpack: (config, { isServer, nextRuntime }) => {
        if (!isServer || nextRuntime === 'edge') {
            config.resolve = config.resolve || {};
            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                '@quantiqen/sdk': false,
            };
        }
        return config;
    },
};

export default nextConfig;

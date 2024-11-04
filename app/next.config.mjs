/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/regions',
            },
            {
                source: '/:regionCode',
                destination: '/regions/:regionCode',
            },
        ];
    },
};

export default nextConfig;

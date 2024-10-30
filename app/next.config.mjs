/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites(){
        return [
            {
                source: '/',
                destination: '/regions'
            }
        ]
    }
};

export default nextConfig;

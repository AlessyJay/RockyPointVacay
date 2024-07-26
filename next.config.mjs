/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'a0.muscache.com',
                pathname: "**"
            },
            {
                protocol: 'https',
                hostname: 'upload.wikimedia.org',
                pathname: "**"
            },
        ]
    }
};

export default nextConfig;

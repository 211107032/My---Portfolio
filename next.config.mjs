/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['github.com', 'linkedin.com'],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    },
    // output: 'export', 
}

module.exports = nextConfig;
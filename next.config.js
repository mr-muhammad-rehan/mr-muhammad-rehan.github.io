/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", 
    experimental:{
        serverComponentsExternalPackages: [
            '@react-email/render',
        ]
    }
}

module.exports = nextConfig

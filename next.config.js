/** @type {import('next').NextConfig} */
const nextConfig = {
    "output": "export",
    basePath: '/banteng',
    assetPrefix: '/banteng/',
    trailingSlash: true,
    images: { unoptimized: true }
}

module.exports = nextConfig

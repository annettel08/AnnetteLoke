/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV == "development" ? "" : "/AnnetteLoke",
    assetPrefix: process.env.NODE_ENV == "development" ? "" : "/AnnetteLoke",
    reactStrictMode: true,
};

export default nextConfig;

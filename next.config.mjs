/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/AnnetteLoke', // replace with your repository name
    assetPrefix: '/AnnetteLoke', // replace with your repository name
    images: {
      unoptimized: true, // This is necessary because Next.js Image Optimization won't work out of the box with GitHub Pages
    },
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;

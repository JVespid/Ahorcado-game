/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devServer: {
    host: '192.168.1.74',
    port: 3000,
  },
};

//npm run dev -- -p 3000 -H 192.168.1.74

module.exports = nextConfig;

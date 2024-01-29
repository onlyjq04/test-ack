/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_ENV: process.env.APP_ENV
  },
  reactStrictMode: true,
}

module.exports = nextConfig

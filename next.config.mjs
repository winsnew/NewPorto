/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {},
    reactStrictMode: false,
    webpack: (config) => {
        config.cache = false
        return config
    },
    sassOptions: {
        additionalData: `
    @import "/styles/_variables.scss";
  `,
    },
}

export default nextConfig
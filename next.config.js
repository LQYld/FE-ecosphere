/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  transpilePackages: [
    '@douyinfe/semi-ui',
    '@douyinfe/semi-icons',
    '@douyinfe/semi-illustrations'
  ],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(gltf|bin|glb)$/i,
      loader: 'url-loader'
    })
    return config
  }
}

module.exports = nextConfig

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
      test: /\.(gltf|hdr)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/3dModal/'
        }
      }
    })
    config.module.rules.push({
      test: /\.(bin)$/,
      use: {
        loader: 'file-loader',
        options: {
          outputPath: 'static/3dModal/',
          name: '[name].[ext]' // keep the original name
        }
      }
    })
    return config
  }
}

module.exports = nextConfig

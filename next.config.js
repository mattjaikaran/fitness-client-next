const withImages = require('next-images')
module.exports = withImages()

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config
  }
}

// const withCSS = require('@zeit/next-css')
// module.exports = withCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// })
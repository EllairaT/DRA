// const withTM = require('next-transpile-modules')(['babel-eslint']) // pass the modules you would like to see transpiled

// module.exports = withTM()
module.exports = {
  distDir: 'build',
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }

    return config
  },
  withTM: require('next-transpile-modules')(['babel-eslint'])
}

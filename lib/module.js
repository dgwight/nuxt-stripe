const { resolve } = require('path')

export default function (moduleOptions) {
  const defaults = {
    defer: true,
    async: true,
    publishableKey: null
  }
  const options = Object.assign({}, defaults, this.options.stripe, moduleOptions)

  this.options.head.script.push({
    src: `//js.stripe.com/v3/`,
    defer: options.defer,
    async: options.async
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'module.js',
    ssr: false,
    options: options
  })
}

module.exports.meta = require('../package.json')

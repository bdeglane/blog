const postcssPresetEnv = require('postcss-preset-env')

module.exports = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 3,
      importFrom: 'custom-media-definition.css',
      features: { 'custom-media-queries': true },
    }),
  ],
})

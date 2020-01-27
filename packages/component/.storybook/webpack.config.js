module.exports = async ({ config, mode }) => {
  // storybook addon source
  // @link https://github.com/storybookjs/storybook/tree/master/addons/storysource#getting-started
  config.module.rules.push({
    test: /\.stories\.jsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  })

  // remove default config to avoid collusion
  // @link https://github.com/storybookjs/storybook/issues/5941#issuecomment-471174523
  config.module.rules = config.module.rules.filter(
    rule => rule.test.toString() !== '/\\.css$/'
  )

  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]-[local]_[hash:base64:5]',
          },
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
      },
    ],
  })

  return config
}

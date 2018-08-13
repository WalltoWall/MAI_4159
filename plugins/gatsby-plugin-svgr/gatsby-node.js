exports.onCreateWebpackConfig = (
  { stage, getConfig, rules, loaders, actions },
  { plugins, ...pluginOptions }
) => {
  const { replaceWebpackConfig, setWebpackConfig } = actions
  const existingConfig = getConfig()

  // Remove svg from url-loader config
  existingConfig.module.rules.map(rule => {
    if (
      String(rule.test) !== String(/\.(ico|svg|jpg|jpeg|png|gif|webp)(\?.*)?$/)
    )
      return rule
    rule.test = /\.(ico|jpg|jpeg|png|gif|webp)(\?.*)?$/
    return rule
  })

  replaceWebpackConfig({ ...existingConfig })

  const svgReactLoaderRule = {
    test: /\.svg$/,
    use: [
      '@svgr/webpack',
      loaders.url({ limit: 10000, name: 'static/[name]-[hash].[ext]' }),
    ],
  }

  let configRules = []

  switch (stage) {
    case `develop`:
    case `build-javascript`:
    case `build-html`:
    case `develop-html`:
      configRules = configRules.concat([svgReactLoaderRule])
      break
    default:
  }

  setWebpackConfig({
    module: {
      rules: configRules,
    },
  })
}

const tsImportPluginFactory = require('ts-import-plugin');
const { getLoader } = require("react-app-rewired");
const rewireScss = require("react-app-rewire-scss");

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      }) ]
    })
  };
  config = rewireScss.withLoaderOptions({})(config, env);

  return config;
}
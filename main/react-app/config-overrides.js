const { 
  override, 
  fixBabelImports, 
  addLessLoader, 
  addDecoratorsLegacy, 
  adjustStyleLoaders,
  addWebpackAlias
} = require('customize-cra');
const path = require("path");

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
  addLessLoader({
    javascriptEnabled: true,
    cssModules: {
      // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
      localIdentName: "[path][name]__[local]--[hash:base64:5]",
    }
    // modifyVars: { '@primary-color': '#ff4d4f' },
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({  
    '@': path.resolve('./src')  
  }),
  (config) => {
    // console.log(config.module.rules[1])
    return config
  }
);
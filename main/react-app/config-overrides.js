const { 
  override, 
  fixBabelImports, 
  addLessLoader, 
  addDecoratorsLegacy, 
  adjustStyleLoaders 
} = require('customize-cra');

module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#ff4d4f' },
  }),
  addDecoratorsLegacy(),
  // adjustStyleLoaders(({ use: [ , css] }) => {
  //   css.options.sourceMap = true;
  //   css.options.modules = {
  //     // 配置默认的样式名称规则
  //     localIdentName:'[name]__[local]--[hash:base64:5]',
  //     getLocalIdent:(loaderContext, localIdentName, localName, options) => {
  //       // 处理antd 的样式
  //       if (loaderContext.resourcePath.includes('node_modules')) {
  //         return localName;
  //       }       
  //     }
  //   }
  // }),
  adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
    css.options.sourceMap = true; // css-loader
    postcss.options.sourceMap = true; // postcss-loader
    // when enable pre-processor,
    // resolve-url-loader will be enabled too
    if (resolve) {
      resolve.options.sourceMap = true; // resolve-url-loader
    }
    // pre-processor
    if (processor && processor.loader.includes('sass-loader')) {
      processor.options.sourceMap = true; // sass-loader
    }
  }),
//   (config) => {

//     return config
//   }
);
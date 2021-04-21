const { 
  override, 
  fixBabelImports, 
  addLessLoader, 
  addDecoratorsLegacy, 
  addWebpackAlias
} = require('customize-cra');
const path = require("path");

module.exports = override(
  // 针对antd 实现按需打包：根据import来打包 (使用babel-plugin-import)
   fixBabelImports('import', {
     libraryName: 'antd',
     libraryDirectory: 'es',
     style: true,
   }),
  // 使用less-loader对源码重的less的变量进行重新制定，设置antd自定义主题
  addLessLoader({
    javascriptEnabled: true,
    sourceMap:true,
    // modifyVars: {
    //   // "@primary-color": "#1DA57A", // for example, you use Ant Design to change theme color.
    // },
    cssLoaderOptions: { // .less file used css-loader option, not all CSS file.
      modules: true,
    }, 
    cssModules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
  }),
  // 允许使用装饰器语法
  addDecoratorsLegacy(),
  addWebpackAlias({  
    '@': path.resolve('./src')  
  }),
  (config) => {
    // console.log(config.module.rules[1])
    return config
  }
);
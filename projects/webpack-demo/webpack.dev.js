const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

/**
 * 开发环境配置
 */
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',  //source-map映射
    devServer: {  //本地服务
        contentBase: './dist',  //监听文件改动，自动编译
        hot: true,  //模块热替换
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()  //模块热替换
    ],
})
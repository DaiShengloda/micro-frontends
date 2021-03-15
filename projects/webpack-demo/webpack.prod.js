const { merge } = require('webpack-merge')
const common = require('./webpack.common')

/**
 * 生产环境配置
 */
module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // 压缩打包优化
    optimization: {
        usedExports: true,  //tree-shaking
        runtimeChunk: 'single',
        splitChunks: {  //防止重复
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
})
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports =  {
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: { '@': resolve('src') },
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    /**
     * 处理各种类型资源的loader
     */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({title: 'webpack'}),  //dist自动生成html文件
        new CleanWebpackPlugin(),  //清除dist目录
        new webpack.ProvidePlugin({  //预设全局依赖
            _: 'lodash'
        }),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ],
}
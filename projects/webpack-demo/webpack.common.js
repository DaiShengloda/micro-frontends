const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    entry: {
        app: './src/index.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        // filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
          '@': resolve('src'),
        },
    },
    module: {
        // loader文件处理
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
                    
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({title: 'webpack'}),  //dist自动生成html文件
        new CleanWebpackPlugin(),  //清除dist目录
        new webpack.ProvidePlugin({  //预设全局依赖
            _: 'lodash'
        })
    ],
}
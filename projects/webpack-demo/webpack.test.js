const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

console.log('...NODE_DEV...', process.env.NODE_ENV)

module.exports = (env, ...args) => {
    // console.log('...env...', env)
    return merge(common, {
        mode: 'production',
        entry: {
            main: './src/index.ts',
        },
        output: {
            filename: '[name].[contenthash].js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
            // publicPath: 'http://static.pftest.senguo.me/easy/'
        },
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            })
        ],
        watch: true
    })
}
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')

console.log('...NODE_DEV...', process.env.NODE_ENV)

module.exports = (env, ...args) => {
    console.log('...env...', env)
    console.log('...args...', args)
    return merge(common, {
        mode: 'production',
        plugins: [
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
            })
        ]
    })
}
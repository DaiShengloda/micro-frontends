const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = env => {
    console.log('...NODE_ENV...')
    console.log(env.NODE_ENV)
    console.log('...NODE_ENV...')
    
    return {
        entry: {
            app: './src/index.js',
        },
        output: {
            filename: '[name].bundle.js',
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
            new webpack.HotModuleReplacementPlugin()  //模块热替换
        ],
        mode: 'development',
        devtool: 'inline-source-map',  //source-map映射
        //开发环境配置
        devServer: {
            contentBase: './dist',  //监听文件改动，自动编译
            hot: true,  //模块热替换
        },
        optimization: {
            usedExports: true  //tree-shaking
        }
    }
}
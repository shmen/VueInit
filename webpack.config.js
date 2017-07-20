var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      'js/vendor': ['vue', 'vue-router'],  //提出来，作为一个单独文件
      'js/index': './src/main.js' //入口
    },
    output: {
        path: __dirname+'/build/',
        chunkFilename: '[name].[hash].js',
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?limit=2048&name=imgs/[name].[hash].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins:[
		new HtmlWebpackPlugin({
            title: 'vue',
			filename:'./index.html',
			inject:true,
			template:'./index.html',
			favicon:'favicon.ico',
			hash:false
		})
	],
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#cheap-module-eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#cheap-module-source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false,
                drop_console: true  //no console
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}

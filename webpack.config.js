const path = require('path'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    OpenBrowserPlugin = require('open-browser-webpack-plugin'),
    extractVendor = new ExtractTextPlugin('css/vendor.css'), // 抽取bootstrap和font-awesome公共样式
    extractStyle = new ExtractTextPlugin('css/style.css'); // 抽取自定义样式

const _postCss = {
    sourceMap: true,
    plugins: (loader) => [
        require('autoprefixer')({
            browsers: ['last 15 versions']
        })
    ]
}
module.exports = {
    entry: process.env.NODE_ENV === 'production' ? {
        // vendor: ['jquery', 'bootJs'],
        app: './src/index.js'
    } : [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            './src/index.js'
        ],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './build'),
        publicPath: '',
        // chunkFilename: "chunk.[name].[chunkhash].js" // 对于按需加载的模块，都不会写在entry入口文件中，chunkFilename是给这些按需加载模块的命名规则
    },
    context: __dirname,
    module: {
        rules: [{
            test: /\.css/,
            use: process.env.NODE_ENV === 'production' ? extractVendor.extract({ fallback: "style-loader", use: [
                {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, {
                    loader: 'postcss-loader',
                    options: _postCss
                }
            ] }) : [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 2
                }
            }, {
                loader: 'postcss-loader',
                options: _postCss
            }]
        }, {
            test: /\.less$/,
            use: process.env.NODE_ENV === 'production' ? extractStyle.extract({ fallback: "style-loader", use: [
                {
                    loader: 'css-loader'
                }, {
                    loader: 'postcss-loader',
                    options: _postCss
                }, {
                    loader: 'less-loader'
                }
            ] }) : [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        importLoaders: 1
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: _postCss
                },
                {
                    loader: 'less-loader',
                    options: {
                        sourceMap: true
                    }
                }
            ]
        }, {
            test: /\.(jpg|png)$/, // 处理.png和.jpg格式的图片文件
            use: [
                'url-loader?limit=10000&name=img/[name].[ext]' // limit参数指图片大小的最大值，当小于这个值时图片转为base64，name参数指图片文件的命名格式，前面可以加 img/ 表示图片存储路径
            ]
        }, {
            test: /\.html$/,
            use: 'html-loader?interpolate=require'
        }, {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            use: [
                'file-loader?name=fonts/[name].[ext]'
            ]
        }]
    },
    plugins: process.env.NODE_ENV === 'production' ? [

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        extractVendor,
        extractStyle,
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        // CommonsChunkPlugin可以让我们在几个模块之间抽取出公共部分内容，并且把他们添加到公共的打包模块中
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor", // 模块名
            filename: "vendor.js",  // 文件名
            minChunks: Infinity, // 该模块至少被其他模块调用多少次时，才会被打包到公共模块中，这个数字必须大于等于2，当传入Infinity时会马上生成
        }),

        // ProvidePlugin可以全局引入某个模块，在其他模块不需要再手动引入且可以直接调用，也能解决其他第三方库(像bootstrap)对jquery的依赖
        new webpack.ProvidePlugin({
            $: 'jquery', // $ 是jquery的模块输出对象，下面的jQuery也是一样的，在其他模块中可以直接被调用
            jQuery: 'jquery'
        })
    ] : [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html'
            }),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin(),
            new webpack.DefinePlugin({
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }),
            // new OpenBrowserPlugin({ url: 'http://localhost:8080/' }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery'
            })
        ],
    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        hot: true,
        noInfo: false
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.less', '.html', '.jsx'],
        alias: {
            'jquery': 'jquery/dist/jquery.min.js',
            'bootCss': 'bootstrap/dist/css/bootstrap.css',
            'bootJs': 'bootstrap/dist/js/bootstrap.js',
            'fontAwesome': 'font-awesome/css/font-awesome.css'
        }
    }
};
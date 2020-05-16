// 此文件生成不同模式下的plugins和loaders
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

function generatePlugins(mode) {
    const config = [
        new HtmlWebpackPlugin({ template: './example/index.html'}), // 生成html文件
        new webpack.HotModuleReplacementPlugin(), // 开启HMR
        new dotenv({ path: `./env/.env.development`, }), // 环境变量配置文件
        new webpack.BannerPlugin({ banner: 'created by yejiawei' }), // 添加一个内容到所有的输出文件的顶部
        new CopyPlugin([ { from: 'static', to: 'static' }, { from: 'docs', to: 'docs' }]), // 复制文件或者文件夹
        new webpack.DefinePlugin({ VERSION: JSON.stringify('v1'),}), // 定义全局变量，字符串必须使用嵌套的字符串引用；全局直接访问 VERSION 即可
        new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }), // 将小于指定字节数的模块合并
        new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*'] }), // 清空dist目录下的所有文件夹
    ];
    return config;
}

function generateLoaders(mode) {
    let hashMode = '';
    const cssConf = {
        localIdentName: '',
        fileStyle: '',
    }
    hashMode = 'hash'
    cssConf.localIdentName = '[path][name]__[local]--[hash:base64:5]';
    cssConf.fileStyle = 'style-loader';

    const config = [
        { test: /\.txt$/i, exclude: /node_modules/, use: 'raw-loader', }, // 将文件使用字符串导入
        { test: /\.csv$/, exclude: /node_modules/, loader: 'csv-loader', 
            options: {
                dynamicTyping: true,    // 自动转成对应的数据类型
                header: true,           // header也转换
                skipEmptyLines: true    // 过滤空行
            }
        },
        { test: /\.(woff|woff2|eot|ttf|otf)$/, exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `[path][name].[${hashMode}].[ext]`,
                    outputPath: 'fonts',
                }
            }],
        },
        { test: /\.(png|svg|jpe?g|gif|svg)$/i, exclude: /node_modules/,
            use: [
                {
                    loader: 'url-loader', // 将文件转成base64 URI
                    options: {
                        fallback: 'file-loader',
                        limit: 8192, // 最大字节数，超过这个字节的文件将使用file-loader处理
                        name: `[path][name].[${hashMode}].[ext]`,
                        outputPath: 'images'
                    },
                },
            ],
        },
        {
            test: /\.md$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `[path][name].[${hashMode}].[ext]`,
                    outputPath: 'md',
                }
            }]
        },
        {
            test: /\.htm$/,
            exclude: /node_modules/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: `[path][name].[${hashMode}].[ext]`,
                    outputPath: 'html',
                }
            }]
        },
        {
            test: /\.s?[ac]ss$/i,
            use: [
                cssConf.fileStyle,
                {
                    loader: 'css-loader', // 允许使用import/require/url/@import形式导入css
                    options: {
                        modules: {
                            mode: 'local',
                            localIdentName: cssConf.localIdentName
                        },
                        localsConvention: 'camelCase',
                        importLoaders: 2,
                        // 0 => no loaders (default);
                        // 1 => postcss-loader;
                        // 2 => postcss-loader, sass-loader
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            require('postcss-import')({ root: loader.resourcePath }), // 支持行内@import
                            require('autoprefixer')({ // 自动添加前缀
                                flexbox: 'no-2009', // browsers配置在package.json的 "browserslist": [ "> 1%", "last 2 versions" ]
                            }),
                            require('cssnano')(), // 压缩css
                            require('postcss-reporter')({ clearReportedMessages: true }),
                        ]
                    }
                },
                'sass-loader',
            ]
        },
        {   // npm install -D babel-loader @babel/core @babel/preset-env
            test: /\.js$/, exclude: /(node_modules|config|public|dist|env|static)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env',
                        {
                            targets: { chrome: "58", ie: "11" }
                        }
                    ]],
                    plugins: [
                        '@babel/plugin-proposal-object-rest-spread',  // 转换rest语法
                        '@babel/plugin-transform-runtime', // 避免重复注入相同代码
                    ]
                }
            }]
        },
        {   // 第一个处理此loader
            test: /\.ts?$/, 
            enforce: 'pre', 
            exclude: /node_modules/,
            use: [
                { 
                    loader: 'ts-loader', 
                    options: { transpileOnly: true  },
                },
                { loader: 'tslint-loader', 
                    options: { 
                        fix: true, 
                        configFile: path.resolve(__dirname, '../', 'tslint.json')
                    }
                }
            ],
        },
    ];

    return config;
}

module.exports={
    generatePlugins,
    generateLoaders
}
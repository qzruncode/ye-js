// 此文件是共有配置
const path = require('path');
const merge = require('webpack-merge');
const helper = require('./helper.config');
const mode = process.env.NODE_ENV;
let modeConfig = require('./dev.config');

const commonConfig = {
    target: "web",
    stats: "errors-only", // 只有错误的时候才输出信息
    context: path.resolve(__dirname, '../'),
    resolve: {
        extensions: [ '.ts', '.js' ],
        modules: [ // 设置解析模块时要查找的路径
            "node_modules",
            path.resolve(__dirname, '../', 'src')
        ],
        alias: {
            "@": path.resolve(__dirname, '../', 'src'),
        },
    },
    plugins: helper.generatePlugins(mode),
    module: { // json文件默认支持，不需要loader
        rules: helper.generateLoaders(mode)
    },
}

module.exports = merge(commonConfig, modeConfig);
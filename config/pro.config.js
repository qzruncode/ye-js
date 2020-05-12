// 此文件是production配置
const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
    mode: 'none',
    context: path.resolve(__dirname, '../'),
    devtool: 'cheap-module-source-map', /* 没有列映射，简化源映射到每一行*/
    entry: [ path.resolve(__dirname, '../src/index.ts'), ],
    output: {
        path: path.resolve(__dirname, '../', 'lib'),
        filename: 'index.js',
        chunkFilename: '[name].bundle.js',
        libraryTarget: 'umd',
    },
    externals: [nodeExternals()]
};
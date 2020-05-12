// 此文件是devlopment配置
const path = require('path');
module.exports = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map', /* 使用eval执行代码，没有列映射，简化源映射到每一行 */
    entry: [
        path.resolve(__dirname, '../example/index.ts'),
        'webpack-hot-middleware/client?path=/__yejiawei&timeout=10000&overlay=false&reload=true'
    ],
    output: {
        path: path.resolve(__dirname, '../example/', 'dist'),
        filename: `js/[name].[hash].js`, // [hash] 每次保存都会重新生成
        publicPath: '/'
    },
};
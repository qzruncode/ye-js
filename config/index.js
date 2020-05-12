const net = require('net');
const express = require('express');
const webpack = require('webpack');
const app = express();
const config = require('./index.config.js');
// 对webpack生成的文件提供服务
const webpackDevMiddleware = require('webpack-dev-middleware');
// 热更新，利用EventSource实现
const webpackHotMiddleware = require("webpack-hot-middleware");
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
    logLevel: 'warn',
    logTime: true,
    publicPath: config.output.publicPath,
    writeToDisk: false, // 文件保存在内存
}));

app.use(webpackHotMiddleware(compiler, {
    log: false,
    path: '/__yejiawei',    // 必须和客户端设置的path一致
    heartbeat: 5000,        // 检查和客户端是否保持连接的时间间隔，必须比客户端设置的timeout小，一般为一半
}));

let PORT = 3000;
const listenFn = function() {
    app.listen(PORT, function () { console.log(`server listening on port ${PORT}!\n`); });
}
const checkPortIsValid = function() {
    const server = net.createServer().listen(PORT);
    server.on('listening', function() {
        server.close();
        // 端口可用
        listenFn();
    })
    server.on('error', function(err){
        if(err.code === 'EADDRINUSE') {
            // 端口被占用
            PORT++;
            checkPortIsValid();
        }
    })
}
checkPortIsValid();

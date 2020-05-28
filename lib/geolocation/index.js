var getLocation = function () {
    return new Promise(function (resolve, reject) {
        if (!navigator.geolocation) {
            reject('你的浏览器不支持定位');
        }
        else {
            navigator.geolocation.getCurrentPosition(function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                resolve({ latitude: latitude, longitude: longitude });
            }, function (err) {
                switch (err.code) {
                    case err.PERMISSION_DENIED: {
                        reject('用户未授权');
                        break;
                    }
                    case err.POSITION_UNAVAILABLE: {
                        reject('获取位置出错');
                        break;
                    }
                    case err.TIMEOUT: {
                        reject('获取位置信息超时');
                        break;
                    }
                    default: reject('UNKNOWN_ERROR');
                }
            });
        }
    });
};
export default { getLocation: getLocation };

function saveParams(params) {
    if (params === void 0) { params = {}; }
    // params 存 localstorage
    if (Object.keys(params).length == 0)
        return false;
    localStorage.setItem(location.hostname.toUpperCase(), JSON.stringify(params));
    history.pushState(params, '', location.href);
    return true;
}
function getParams() {
    // 从 localstorage 中取数据出来，放入state中
    if (history.state == null || Object.keys(history.state).length == 0) {
        var o = localStorage.getItem(location.hostname.toUpperCase());
        if (o != null) {
            var obj = JSON.parse(o);
            if (Object.keys(obj).length > 0) {
                history.pushState(obj, '', location.href);
            }
        }
    }
    return history.state;
}
function removeParams(key) {
    if (key === void 0) { key = ''; }
    if (key == '')
        return false;
    var o = localStorage.getItem(location.hostname.toUpperCase());
    if (o != null) {
        var obj = JSON.parse(o);
        if (obj.hasOwnProperty(key)) {
            delete obj[key];
            return saveParams(obj);
        }
    }
}
function clearParams() {
    var o = localStorage.getItem(location.hostname.toUpperCase());
    if (o != null) {
        localStorage.removeItem(location.hostname.toUpperCase());
        history.pushState({}, '', location.href);
    }
    return true;
}
export default {
    saveParams: saveParams,
    getParams: getParams,
    removeParams: removeParams,
    clearParams: clearParams
};

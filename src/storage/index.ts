function saveParams(params={}) {
    // params 存 localstorage
    if(Object.keys(params).length == 0) return false;
    localStorage.setItem(location.hostname.toUpperCase(), JSON.stringify(params))
    history.pushState(params, '', location.href);
    return true;
}

function getParams() {
    // 从 localstorage 中取数据出来，放入state中
    if(history.state == null || Object.keys(history.state).length == 0) {
        const o = localStorage.getItem(location.hostname.toUpperCase());
        if(o != null) {
            const obj = JSON.parse(o);
            if(Object.keys(obj).length > 0) {
                history.pushState(obj, '', location.href);
            }
        }
    }
    return history.state;
}

function removeParams(key='') {
    if(key == '') return false;
    const o = localStorage.getItem(location.hostname.toUpperCase());
    if(o != null) {
        const obj = JSON.parse(o);
        if(obj.hasOwnProperty(key)) {
            delete obj[key];
            return saveParams(obj);
        }
    }
}

function clearParams() {
    let o = localStorage.getItem(location.hostname.toUpperCase());
    if(o != null) {
        localStorage.removeItem(location.hostname.toUpperCase());
        history.pushState({}, '', location.href);
    }
    return true;
}

export default {
    saveParams,
    getParams,
    removeParams,
    clearParams
}
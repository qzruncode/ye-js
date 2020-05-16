interface Options {
    path?: string;
    domain?: string;
    'max-age'?: number;
    expires?: string;
    secure?: boolean;
    samesite?: 'lax' | 'strict';
}

const Cookies = {
    all: () => {
        if(document.cookie == ''){
            return {};
        }else {
            return document.cookie
                .split(';')
                .map(v => v.split('='))
                .reduce((acc: any, v: string[]) => {
                    acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
                    return acc;
                }, {});
        }
    },
    entries: () => {
        if(document.cookie == ''){
            return [];
        }else {
            return document.cookie.split('; ').map(item => item.split('='))
        }
    },
    get: (key: string) => {
        const reg = new RegExp(String.raw`(?:(?:^|.*;\s*)${key}\s*\=\s*([^;]*).*$)|^.*$`);
        return document.cookie.replace(reg, '$1');
    },
    set: (key: string, value: string, options?: Options) => {
        let optionArr: string[] = [];
        if(options && Object.keys(options).length > 0) {
            Object.keys(options).forEach(key => {
                if(key == 'path') {
                    optionArr.push(`path=${relPathToAbs(options.path as string)}`)
                }else if(key == 'secure' && options.secure == true) {
                    optionArr.push('secure');
                }else {
                    optionArr.push(`${key}=${(options as any)[key]}`);
                }
            })
        }
        document.cookie = `${key}=${value}; ` + optionArr.join('; ');
    },
    remove: (key: string) => {
        const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if(keys?.includes(key)){
            document.cookie=`${key}=;expires=${(new Date(0) as any).toGMTString()}`;
            return true;
        }
        return false;
    },
    clear: () => {
        const keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        keys?.forEach(key => {
            Cookies.remove(key);
        })
    }
}

// Relative path to absolute path
function relPathToAbs(sRelPath: string) {
    let nUpLn = 0,
        sDir = '',
        sPath = location.pathname.replace(/[^\/]*$/, sRelPath.replace(/(\/|^)(?:\.?\/+)+/g, '$1')),
        nEnd = 0,
        nStart = 0;
    for (nEnd = 0, nStart = 0; nEnd = sPath.indexOf('/../', nStart), nEnd > -1; nStart = nEnd + nUpLn) {
        nUpLn = /^\/(?:\.\.\/)*/.exec(sPath.slice(nEnd))?.[0].length as any;
        sDir = (sDir + sPath.substring(nStart, nEnd)).replace(new RegExp('(?:\\\/+[^\\\/]*){0,' + ((nUpLn - 1) / 3) + '}$'), '/');
    }
    return sDir + sPath.substr(nStart);
}

export default Cookies;
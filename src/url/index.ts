const Url = {
    formToParams: (form: HTMLFormElement) => {
        return '?' + Array.from(
            new FormData(form) as any, 
            (field: any) => field.map(encodeURIComponent).join('=')
        ).join('&');
    },
    objToParams: (obj: {[propName: string]: string | undefined}) => {
        return obj ? Object.entries(obj).reduce((queryString, [key, val], index) => {
                const symbol = queryString.length === 0 ? '?' : '&';
                queryString += typeof val === 'string' ? `${symbol}${key}=${val}` : '';
                return queryString;
            }, '')
        : '';
    },
    getParamsObjFormUrl: (url: string) => {
        return (url.match(/([^?=&]+)(=([^&]*))/g) || [])
        .reduce((a: any, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a), {});
    }
}

export default Url;
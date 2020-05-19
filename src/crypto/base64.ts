const Base64 = {
    bufferToBase64: (buffer: ArrayBuffer) => {
        const typeArr = new Uint16Array(buffer);
        const str = String.fromCharCode(...typeArr);
        return window.btoa(str);
    },
    base64ToBuffer: (base64: string) => {
        const str = window.atob(base64);
        console.log(str);
        const typeArr = new Uint16Array(str.length);
        for(let i = 0; i < str.length; i++) {
            typeArr[i] = str.charCodeAt(i);
        }
        return typeArr
    },
    base64ToFile: (base64: string, fileName: string) => {
        if(base64) {
            const tmpArr = base64.split(',');
            const mime = tmpArr[0].match(/:(.*?);/);
            if(!mime) {
                return null
            }else {
                const str = atob(tmpArr[1]);
                const arr = new Uint8Array(str.length);
                for(let i = 0; i < str.length; i++) {
                    arr[i] = str.charCodeAt(i);
                }
                return new File([arr], fileName, { type: mime[1] });
            }
        }
        return null;
    },
    fileTobase64: (file: File) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = e => { 
                resolve(e.target?.result);
            };
            reader.onerror = () => { 
                reject('read fail');
            };
            reader.readAsDataURL(file);
        })
    }
}

export default Base64;
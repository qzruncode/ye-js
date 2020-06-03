const bufferToBase64 = (buffer: ArrayBuffer) => {
    const typeArr = new Uint16Array(buffer);
    const str = String.fromCharCode(...typeArr);
    return window.btoa(str);
};

const base64ToBuffer = (base64: string) => {
    const str = window.atob(base64);
    console.log(str);
    const typeArr = new Uint16Array(str.length);
    for(let i = 0; i < str.length; i++) {
        typeArr[i] = str.charCodeAt(i);
    }
    return typeArr;
};


const base64ToFile = (base64: string, fileName: string) => {
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
};

const fileTobase64 = (file: File) => {
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
};

const base64ToBlob = (base64: string) => {
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
            return new Blob([arr], { type: mime[1] });
        }
    }
    return null;
};

const blobTobase64 = (blob: Blob) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => { 
            resolve(e.target?.result);
        };
        reader.onerror = () => { 
            reject('read fail');
        };
        reader.readAsDataURL(blob);
    })
};

const base64ToUrl = (base64: string) => {
    const b = base64ToBlob(base64);
    const url = window.URL.createObjectURL(b);
    return {
        value: url,
        revoke: () => URL.revokeObjectURL(url)
    };
};

const download = (base64: string, fileName: string) => {
    const u = base64ToUrl(base64);
    const a = document.createElement("a");
    a.href = u.value;
    a.download = fileName;
    a.click();
    a.remove();
    u.revoke();
};

const compress = (base64: string, encoder: number) => {
    const u = base64ToUrl(base64);
    const img = document.createElement("img");
    const canvas = document.createElement("canvas");
    return new Promise((resolve, reject) => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx?.clearRect(0, 0, canvas.width, canvas.height);
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
            const tmpArr = base64.split(',');
            const mime = tmpArr[0].match(/:(.*?);/) || [];
            const imageData = canvas.toDataURL(mime[1] || 'image/jpeg', encoder);
            resolve(imageData);
        };
        img.onerror = (e) => {
            reject(e);
        }
        img.src = u.value;
    })
    
}

export default {
    bufferToBase64,
    base64ToBuffer,
    base64ToFile,
    fileTobase64,
    base64ToBlob,
    blobTobase64,
    base64ToUrl,
    download,
    compress
};
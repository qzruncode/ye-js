export default interface Crypto {
    MD5: (text: string) => string;
    Html: {
        escapeHTML: (str: string) => string;
        unescapeHTML: (str: string) => string;
    };
    Base64: {
        bufferToBase64: (buffer: ArrayBuffer) => string;
        base64ToBuffer: (base64: string) => ArrayBuffer;
        base64ToFile: (base64: string, fileName: string) => File | null;
        fileTobase64: (file: File) => Promise<any>;
        base64ToBlob: (base64: string) => Blob | null;
        blobTobase64: (blob: Blob) => Promise<any>;
        base64ToUrl: (base64: string) => {value: string, revoke: Function};
        download: (base64: string, fileName: string) => void;
        compress: (base64: string, encoder: number) => Promise<any>;
    };
    Classical: {
        Shift: {
            decode: (str: string, shift: number) => string;
            encode: (str: string, shift: number) => string;
        };
    }
}
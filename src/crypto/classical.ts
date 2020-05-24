const base = Math.pow(2, 16) - 1;

const Shift = {
    encode: (str: string = '', shift: number) => {
        if(shift <= base) {
            const codes = [];
            for(let i = 0; i < str.length; i++) {
                codes.push((str.charCodeAt(i) + shift) % base);
            }
            return String.fromCharCode(...codes);
        }
        return '';
    },
    decode: (str: string = '', shift: number) => {
        if(shift <= base) {
            const codes = [];
            for(let i = 0; i < str.length; i++) {
                codes.push((str.charCodeAt(i) - shift) % base);
            }
            return String.fromCharCode(...codes);
        }
        return '';
    },
}

export default {
    Shift
}
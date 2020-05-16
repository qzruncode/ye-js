interface Options {
    path?: string;
    domain?: string;
    'max-age'?: number;
    expires?: string;
    secure?: boolean;
    samesite?: 'lax' | 'strict';
}
export default interface Cookies {
    all: () => {[propName: string]: any};
    entries: () => Array<[string]>;
    get: (key: string) => string;
    set: (key: string, value: string, options?: Options) => void;
    remove: (key: string) => boolean;
    clear: () => void;
}
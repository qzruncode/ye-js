export interface Observer {
    objList: any[];
    add: (obj: any) => void;
    notify: (payload: any) => void;
}
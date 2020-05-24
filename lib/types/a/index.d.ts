export default interface A {
    remove: (arr: Array<any>, fn: (item: any) => boolean) => Array<any>;
    isSorted: (arr: Array<number>) => 1 | -1 | 0;
    reducedFilter: (
        data: Array<{[propName: string]: any}>, 
        keys: string[], 
        fn: (item: any) => boolean
    ) => Array<{[propName: string]: any}>;
    deDuplication: (arr: any[]) => any[];
    stableSort: (
        arr: any[], 
        compare: ( pre: any, cur: any ) => number) => any[];
    bubbleSort: (arr: number[]) => number[];
    quickSort: (arr: number[]) => number[];
    binarySort: (arr: number[]) => number[];
    directInsertionSort: (arr: number[]) => number[];
    binarySearch: (arr: number[], elem: number) => number;
}
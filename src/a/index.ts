const remove = (arr: Array<any>, fn: (item: any) => boolean) => {
    if(Array.isArray(arr)) {
        return arr.filter(fn).reduce((acc, val) => {
            arr.splice(arr.indexOf(val), 1);
            return acc.concat(val);
        }, [])
    }else {
        return [];
    }
}

const isSorted = (arr: Array<number>) => {
    let direction = -(arr[0] - arr[1]);
    for (let [i, val] of arr.entries()) {
        direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
        if (i === arr.length - 1) return !direction ? 0 : direction / Math.abs(direction);
        else if ((val - arr[i + 1]) * direction > 0) return 0;
    }
};

const reducedFilter = (
    data: Array<{[propName: string]: any}>, 
    keys: string[], 
    fn: (item: any) => boolean
) => data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
        acc[key] = el[key];
        return acc;
    }, {} as {[propName: string]: any})
);

const deDuplication = (arr: any[]) => {
    return arr.reduce(function(pre, cur){
        if(!pre.includes(cur)){
            pre.push(cur);
        }
        return pre;
    }, [])
}

const stableSort = (
    arr: any[], 
    compare: (pre: any, cur: any) => 1 | 0 | -1
) =>
    arr
        .map((item, index) => ({ item, index }))
        .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
        .map(({ item }) => item);

const bubbleSort = (arr: number[]) => {
    let flag;
    const backupArr = Array.from(arr);
    for(let i = 0; i < backupArr.length - 1; i++) {
        flag = false;
        for(let j = backupArr.length - 1; j > i; j--) {
            if(backupArr[j - 1] > backupArr[j]) {
                const tmp = backupArr[j];
                backupArr[j] = backupArr[j-1];
                backupArr[j-1] = tmp;
                flag = true;
            }
        }
        if(!flag) return backupArr;
    }
    return backupArr;
}

const quickSort = (arr: number[]) => {
    const backupArr = Array.from(arr);
    sort(backupArr, 0, arr.length - 1);
    function sort(arr: number[], start: number, end: number){
        let i = start, j = end, tmp;
        if(i < j) {
            tmp = arr[i]; // 中心元素
            while(i < j) {
                while(i < j && arr[j] >= tmp) { // 找到小于中心元素的值
                    --j;
                }
                if(i < j) {
                    arr[i] = arr[j];
                    ++i;
                }
                while(i < j && arr[i] < tmp) { // 找到大于中心元素的值
                    ++i;
                }
                if(i < j) {
                    arr[j] = arr[i];
                    --j;
                }
            }
            arr[i] = tmp;
            sort(arr, start, i - 1);
            sort(arr, i + 1, end);
        }
    }
    return backupArr;
}

const binarySort = (arr: number[]) => {
    let curItem, start, end, mid;

    const backupArr = Array.from(arr);
    backupArr.forEach((item, curIndex) => {
        start = 0;
        end = curIndex - 1;

        while(start <= end) {
            mid = Math.floor((start + end) / 2);
            if(backupArr[curIndex] < backupArr[mid]) {
                end = mid - 1;
            }else {
                start = mid + 1;
            }
        }

        curItem = backupArr[curIndex];

        for(let i = curIndex - 1; i >= end + 1; i--) {
            backupArr[i+1] = backupArr[i];
        }

        backupArr[end+1] = curItem;
    })
    return backupArr;
}

const binarySearch = (arr: number[], elem: number) => {
    let start = 0, end = arr.length - 1, tmp;
    while(start <= end) {
        tmp = Math.floor((start + end) / 2);
        if(arr[tmp] == elem) {
            return tmp;
        }else if(arr[tmp] > elem) {
            end = tmp - 1;
        }else {
            start = tmp + 1;
        }
    }
    return -1;
}

const directInsertionSort = (arr: number[]) => {
    let preIndex, curItem;
    const backupArr = Array.from(arr);
    backupArr.forEach((item, curIndex) => {
        preIndex = curIndex - 1;
        curItem = backupArr[curIndex];
        while(preIndex >= 0 && curItem < backupArr[preIndex]) {
            backupArr[preIndex + 1] = backupArr[preIndex];
            --preIndex;
        }
        backupArr[preIndex + 1] = curItem;
    })
    return backupArr;
}

export default {
    remove,
    isSorted,
    reducedFilter,
    deDuplication,
    stableSort,
    bubbleSort,
    quickSort,
    binarySort,
    directInsertionSort,
    binarySearch,
};
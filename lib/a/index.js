import { __read, __values } from "tslib";
var remove = function (arr, fn) {
    if (Array.isArray(arr)) {
        return arr.filter(fn).reduce(function (acc, val) {
            arr.splice(arr.indexOf(val), 1);
            return acc.concat(val);
        }, []);
    }
    else {
        return [];
    }
};
var isSorted = function (arr) {
    var e_1, _a;
    var direction = -(arr[0] - arr[1]);
    try {
        for (var _b = __values(arr.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), i = _d[0], val = _d[1];
            direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
            if (i === arr.length - 1)
                return !direction ? 0 : direction / Math.abs(direction);
            else if ((val - arr[i + 1]) * direction > 0)
                return 0;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
var reducedFilter = function (data, keys, fn) { return data.filter(fn).map(function (el) {
    return keys.reduce(function (acc, key) {
        acc[key] = el[key];
        return acc;
    }, {});
}); };
var deDuplication = function (arr) {
    return arr.reduce(function (pre, cur) {
        if (!pre.includes(cur)) {
            pre.push(cur);
        }
        return pre;
    }, []);
};
var stableSort = function (arr, compare) {
    return arr
        .map(function (item, index) { return ({ item: item, index: index }); })
        .sort(function (a, b) { return compare(a.item, b.item) || a.index - b.index; })
        .map(function (_a) {
        var item = _a.item;
        return item;
    });
};
var bubbleSort = function (arr) {
    var flag;
    var backupArr = Array.from(arr);
    for (var i = 0; i < backupArr.length - 1; i++) {
        flag = false;
        for (var j = backupArr.length - 1; j > i; j--) {
            if (backupArr[j - 1] > backupArr[j]) {
                var tmp = backupArr[j];
                backupArr[j] = backupArr[j - 1];
                backupArr[j - 1] = tmp;
                flag = true;
            }
        }
        if (!flag)
            return backupArr;
    }
    return backupArr;
};
var quickSort = function (arr) {
    var backupArr = Array.from(arr);
    sort(backupArr, 0, arr.length - 1);
    function sort(arr, start, end) {
        var i = start, j = end, tmp;
        if (i < j) {
            tmp = arr[i]; // 中心元素
            while (i < j) {
                while (i < j && arr[j] >= tmp) { // 找到小于中心元素的值
                    --j;
                }
                if (i < j) {
                    arr[i] = arr[j];
                    ++i;
                }
                while (i < j && arr[i] < tmp) { // 找到大于中心元素的值
                    ++i;
                }
                if (i < j) {
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
};
var binarySort = function (arr) {
    var curItem, start, end, mid;
    var backupArr = Array.from(arr);
    backupArr.forEach(function (item, curIndex) {
        start = 0;
        end = curIndex - 1;
        while (start <= end) {
            mid = Math.floor((start + end) / 2);
            if (backupArr[curIndex] < backupArr[mid]) {
                end = mid - 1;
            }
            else {
                start = mid + 1;
            }
        }
        curItem = backupArr[curIndex];
        for (var i = curIndex - 1; i >= end + 1; i--) {
            backupArr[i + 1] = backupArr[i];
        }
        backupArr[end + 1] = curItem;
    });
    return backupArr;
};
var binarySearch = function (arr, elem) {
    var start = 0, end = arr.length - 1, tmp;
    while (start <= end) {
        tmp = Math.floor((start + end) / 2);
        if (arr[tmp] == elem) {
            return tmp;
        }
        else if (arr[tmp] > elem) {
            end = tmp - 1;
        }
        else {
            start = tmp + 1;
        }
    }
    return -1;
};
var directInsertionSort = function (arr) {
    var preIndex, curItem;
    var backupArr = Array.from(arr);
    backupArr.forEach(function (item, curIndex) {
        preIndex = curIndex - 1;
        curItem = backupArr[curIndex];
        while (preIndex >= 0 && curItem < backupArr[preIndex]) {
            backupArr[preIndex + 1] = backupArr[preIndex];
            --preIndex;
        }
        backupArr[preIndex + 1] = curItem;
    });
    return backupArr;
};
export default {
    remove: remove,
    isSorted: isSorted,
    reducedFilter: reducedFilter,
    deDuplication: deDuplication,
    stableSort: stableSort,
    bubbleSort: bubbleSort,
    quickSort: quickSort,
    binarySort: binarySort,
    directInsertionSort: directInsertionSort,
    binarySearch: binarySearch,
};

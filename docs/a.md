## A

### import 
```
import { A } from 'ye-js';
```

### remove
```
A.remove(
    [{v: 1}, {v: 2}, {v: 3}, {v: 4}], 
    item => item.v % 2 === 0
);

output:
    [{v: 2}, {v: 4}]
```

### isSorted
```
A.isSorted([1, 2, 3, 4]);
A.isSorted([1, 5, 3, 4]);
A.isSorted([4, 3, 2, 1]);

output:
    1 // ascending
    0 // unsorted
    -1 // descending
```

### reducedFilter
```
Specifies an array of key names and a filter function to filter data

A.reducedFilter(
    [
        { id: 1, name: 'Donald John Trump', age: 24 }, 
        { id: 2, name: 'Barack Obama', age: 50 } 
    ],
    ['id', 'name'],
    (item) => item.age > 24,
);

output:
    {id: 2, name: "Barack Obama"}
```

### deDuplication
```
duplicate removal

A.deDuplication([3, 2, 1, 3, 7, 7]) // [3, 2, 1, 7]
```

### stableSort
```
A.stableSort(
    [
        {k: 1, v: 'a'}, 
        {k: 3, v: 'b'}, 
        {k: 3, v: 'c'}, 
        {k: 2, v: 'd'}],
    (pre, cur) => 1,
);

output:
    [
        {k: 1, v: "a"}
        {k: 2, v: "d"}
        {k: 3, v: "b"}
        {k: 3, v: "c"}
    ]
```

### bubbleSort
```
A.bubbleSort([3, 2, 1, 7]); // [1, 2, 3, 7]
```

### quickSort
```
A.quickSort([3, 2, 1, 7]); // [1, 2, 3, 7]
```

### binarySort
```
A.binarySort([3, 2, 1, 7]); // [1, 2, 3, 7]
```

### directInsertionSort
```
A.directInsertionSort([3, 2, 1, 7]); // [1, 2, 3, 7]
```

### binarySearch
```
Binary search, the array passed in must be sorted, returns the index, no find returns -1

const arr = [3, 2, 1, 7].sort()
A.binarySearch(arr, 3); // 2
```


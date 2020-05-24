## O

### import 
```
import { O } from 'ye-js';
```

### deepClone
```
O.deepClone(obj)
```

### shallowClone
```
O.shallowClone(obj)
```

### merge
```
const object = {
    a: [{ x: 2 }, { y: 4 }],
    b: 1
};
const other = {
    a: { z: 3 },
    b: [2, 3],
    c: 'foo'
};
merge(object, other);
```
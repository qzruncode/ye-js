## storage

> Data is stored persistently in localstorage and mapped to the state in history

### import 
```
import { Storage } from 'ye-js';
```

### use case
```
Storage.saveParams({a: 'aa', b: 'bb'});
console.log(Storage.getParams()) // {a: "aa", b: "bb"}
Storage.removeParams('a')
console.log(Storage.getParams()) // {b: "bb"}
Storage.clearParams();
console.log(Storage.getParams()) // {}
```
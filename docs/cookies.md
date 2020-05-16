## cookies

## import 
```
import { Cookies } from 'ye-js';
```

### all
```
Cookies.all(); // {key: value, ...}
```

### entries
```
Cookies.entries(); // [[key, value], ...]
```

### get
```
Cookies.get(key) // value
```

### set
```
Cookies.set(key, value);
Cookies.set(key, value, options?: Options)
    Options: {
        path?: string;
        domain?: string;
        'max-age'?: number;
        expires?: string;
        secure?: boolean;
        samesite?: 'lax' | 'strict';
    }
```

### remove
```
Cookies.remove(key);
```

### clear
```
Cookies.clear();
```
## url

### import 
```
import { Url } from 'ye-js';
```

### params

> handle url search params

> Most of the time, only three of the following functions will be used, and if they don't meet your needs, use the webapi URLSearchParams

+ formToParams
    ```
    Url.formToParams(form: HTMLFormElement) // ?name=ye&age=10
    ```

+ objToParams
    ```
    Url.objToParams({ name: 'ye', age: undefined }) // ?name=ye
    ```

+ getParamsObjFormUrl
    ```
    Url.getParamsObjFormUrl('http://test.com/index?name=ye&age=10') // {name: "ye", age: "10"}
    ```


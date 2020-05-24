## F

### import 
```
import { F } from 'ye-js';
```

### deBounce
```
This function is not triggered for a specified period of time until the last function call is executed. This is usually used for mouse or pointer events to avoid multiple calls in a short period of time

example use

    function fn(d) {
        console.log(d, 'ok');
    }
    const wrapFn = F.deBounce(fn, 2000);

    wrapFn(1);
    setTimeout(() => wrapFn(2), 1000);
    setTimeout(() => wrapFn(3), 2000);
    wrapFn(4);
    setTimeout(() => wrapFn(5), 1000);

    output
        3 "ok"
```

### saveFlow
```
The user executes the function multiple times, only once in a specified amount of time

example use

    function fn(d: any) {
        console.log(d, 'ok');
    }
    const wrapFn = F.saveFlow(fn, 2000);

    setTimeout(() => wrapFn(1), 1000);
    setTimeout(() => wrapFn(2), 2000);
    setTimeout(() => wrapFn(3), 3000);
    setTimeout(() => wrapFn(4), 4000);
    setTimeout(() => wrapFn(5), 5000);
    setTimeout(() => wrapFn(6), 6000);
    setTimeout(() => wrapFn(7), 7000);
    setTimeout(() => wrapFn(8), 8000);

    output
        2 "ok"
        4 "ok"
        6 "ok"
        8 "ok"
```
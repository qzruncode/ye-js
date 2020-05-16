## Event

### import 
```
import { Event } from 'ye-js';
```

### listen
```
Listen for dom events

const id = Event.listen(
    dom,
    'click',
    e => { console.log(e); }, 
    { capture: true, once: true, passive: true }
);
```

### unlisten
```
Unlisten for dom events

Event.unlisten(
    dom,
    id,
);
```

### trigger
```
Manually trigger dom events

Event.trigger(id);
```
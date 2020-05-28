## geolocation

### import 
```
import { Geo } from 'ye-js';
```

### getLocation
```
Geo.getLocation().then(res => {
    console.log(res.latitude, res.longitude);
}).catch(err => {
    console.log(err);
})
```
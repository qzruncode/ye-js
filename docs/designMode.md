## design mode

### observer mode
```
const obj1 = [1];
const obj2 = [2];
const obj3 = [3];
DesignMode.Observer.add(obj1); // add instance
DesignMode.Observer.add(obj2);
DesignMode.Observer.add(obj3); 
DesignMode.Observer.notify(1111); // Notify all instances
```

### Publish and subscribe mode
```
const obj1 = [1];
const obj2 = [2];
const obj3 = [3];
DesignMode.PubSub.sub('topic', obj1); // subscribe
const id = DesignMode.PubSub.sub('topic', obj2);
DesignMode.PubSub.unsub('topic', id); // unsubscribe
DesignMode.PubSub.sub('topic', obj3);
DesignMode.PubSub.pub('topic', 12345); // publish
```

### Single mode
```
Returns the same instance

const instance = {
    a: 'aa',
};
DesignMode.Single.getInstance(instance) == DesignMode.Single.getInstance(instance) // true
```
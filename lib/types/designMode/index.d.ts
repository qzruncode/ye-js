import { Observer } from './observer';
import { PubSub } from './pubsub';
import { Single } from './single';
export = designMode;
export as namespace designMode;
declare namespace designMode{
    const Observer: Observer;
    const PubSub: PubSub;
    const Single: Single;
}

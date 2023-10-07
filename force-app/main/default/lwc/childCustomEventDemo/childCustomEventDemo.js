import { LightningElement } from 'lwc';

export default class ChildCustomEventDemo extends LightningElement {
    clickHandler() {
        // Create custom event
        const myCustomEvent = new CustomEvent('displaymessage');

        // Dispatch the event
        this.dispatchEvent(myCustomEvent);
    }
}

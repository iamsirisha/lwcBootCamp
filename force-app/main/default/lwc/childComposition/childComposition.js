import { LightningElement } from 'lwc';

export default class ChildComposition extends LightningElement {

    fireHandler(){
        let myCustomEvent=new Event("fire",
        {
            bubbles:true,
            composed:true

        });
        this.dispatchEvent(myCustomEvent);
    }
}
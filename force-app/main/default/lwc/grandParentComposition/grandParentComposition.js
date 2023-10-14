import { LightningElement } from 'lwc';

export default class GrandParentComposition extends LightningElement {
    firechildHandler(){
console.log("Event Handled in Grand parent- At Child Level");
    }

}
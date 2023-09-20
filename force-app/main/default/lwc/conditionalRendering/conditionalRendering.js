import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayMessage =false;
    changeHandler(event)
{
    //event.target.value
    //toggle handler
this.displayMessage= !this.displayMessage;
}


}
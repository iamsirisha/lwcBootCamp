import { LightningElement} from 'lwc';

export default class ParentCustomEventDemo extends LightningElement {
     displayMessage = false;

    displayMessageHandler(event) {
        console.log("displayMessageHandler called");
        this.displayMessage = true;
    }
}

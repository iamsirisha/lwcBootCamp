import { LightningElement, track } from 'lwc';

export default class UppercaseNameConverter extends LightningElement {
    @track firstName = '';
    @track lastName = '';
    @track convertedFirstName = '';
    @track convertedLastName = '';

    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    convertToUppercase() {
        this.convertedFirstName = this.firstName.toUpperCase();
        this.convertedLastName = this.lastName.toUpperCase();
    }
}

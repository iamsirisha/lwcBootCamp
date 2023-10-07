import { LightningElement, wire } from 'lwc';
import getContactsList from '@salesforce/apex/ContactController.getContactsList';

export default class ContactList extends LightningElement {
    @wire(getContactsList) contacts;
    selectedContact;
    selectionHandler(event) {
        let selectedContactId = event.detail;
        this.selectedContact = this.contacts.data.find(
            (curritem) => curritem.Id === selectedContactId
        );
    }
}

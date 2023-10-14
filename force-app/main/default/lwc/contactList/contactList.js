import { LightningElement, wire } from 'lwc';
import getContactsList from '@salesforce/apex/ContactController.getContactsList';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';
export default class ContactList extends LightningElement {

    @wire(MessageContext)
    messageContext;
    @wire(getContactsList) contacts;
    selectedContact;
    selectionHandler(event) {
        let selectedContactId = event.detail;
        this.selectedContact = this.contacts.data.find(
            (curritem) => curritem.Id === selectedContactId
        );
    }

    handleContactSelect(event) {
        const payload = { lmsData: this.selectedContact };

        publish(this.messageContext, recordSelected, payload);
    }
}
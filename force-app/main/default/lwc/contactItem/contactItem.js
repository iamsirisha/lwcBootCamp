import { LightningElement, api } from 'lwc';

export default class ContactItem extends LightningElement {
    @api contact;

    clickHandler(event) {
        // Prevent the default behavior
        event.preventDefault();

        // 1. Create a custom event
        const selectionEvent = new CustomEvent('selection', {
            detail: this.contact.Id,
        });

        // 2. Dispatch the event
        this.dispatchEvent(selectionEvent); // Use selectionEvent variable, not a string
    }
}
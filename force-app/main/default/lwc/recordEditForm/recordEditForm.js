import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_SLA from "@salesforce/schema/Account.SLAExpirationDate__c";
import ACCOUNT_RATING from "@salesforce/schema/Account.Rating";
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordEditForm extends NavigationMixin(LightningElement) {
    @api recordId;
    @api objectApiName;
    //objectApiName=ACCOUNT_OBJECT;
    fields = {
        Name: ACCOUNT_NAME,
        Industry: ACCOUNT_INDUSTRY,
        Sladate: ACCOUNT_SLA,
        Rating: ACCOUNT_RATING
    }; 
        successHandler(event)
         {
            const pageRef = {
                type: "standard__recordPage",
                attributes: {
                    recordId: event.detail.id,
                    objectApiName: this.objectApiName,
                    actionName: "view"
                }
            };
        
            this[NavigationMixin.Navigate](pageRef);
        }      
    errorHandler(event)
    {
        //console.log(JSON.stringify(event.detail));   
        const toastevent = new ShowToastEvent({
            title: "Error",
            message: event.detail.message,
            variant:"error"
        });
        this.dispatchEvent(toastevent);
    }
    submitHandler(event)
    {
//check if Rating is Blank if blank Rating as Cold
event.preventDefault();
console.log(event.detail);
console.log(JSON.stringify(event.detail));
const fields=event.detail.fields;
if(!fields.Rating)
{
fields.Rating="Cold"
}
this.template.querySelector("lightning-record-edit-form").submit(fields);
 }
 resetHandler(){
    let inputfields=this.template.querySelectorAll("lightning-input-field");
    inputfields.forEach((currItem)=>currItem.reset());
 }
}

import { LightningElement, api } from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import ACCOUNT_RATING from "@salesforce/schema/Account.Rating";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class RecordformDemo extends NavigationMixin(LightningElement) {
  @api recordId;
  @api objectApiName;
  fieldsList = [ACCOUNT_NAME, ACCOUNT_INDUSTRY, ACCOUNT_REVENUE, ACCOUNT_RATING];

  showToast() {
    const event = new ShowToastEvent({
      title: 'Success',
      message: 'Record Update Successfully!',
      variant: "success"
    });
    this.dispatchEvent(event);
  }

  navigatetoRecord(event) {
    let pageRef = {
      type: 'standard__recordPage',
      attributes: {
        recordId: event.detail.id,
        objectApiName: this.objectApiName,
        actionName: 'view'
      }
    };

    this[NavigationMixin.Navigate](pageRef);
  }
}

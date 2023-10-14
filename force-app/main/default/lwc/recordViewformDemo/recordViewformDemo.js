import { LightningElement,api } from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import ACCOUNT_RATING from "@salesforce/schema/Account.Rating";
export default class RecordViewformDemo extends LightningElement {
    @api recordId;
    @api objectApiName;
    fieldObject=
    {
        Name:ACCOUNT_NAME,
        Industry:ACCOUNT_INDUSTRY,
        Revenue:ACCOUNT_REVENUE,
        Rating:ACCOUNT_RATING

    }
  
}
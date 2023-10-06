import { LightningElement, wire } from 'lwc'; 
import ACCOUNT_OBJECT from "@salesforce/schema/Account"; 
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry"; 
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi'; 
 
export default class PicklistDemo extends LightningElement { 
    value; 
    @wire (getObjectInfo,{ 
        objectApiName : ACCOUNT_OBJECT 
    }) accountinfo; 
 
    @wire (getPicklistValues,{ 
        recordTypeId : "$accountinfo.data.defaultRecordTypeId", 
        fieldApiName : ACCOUNT_INDUSTRY 
    }) industrypicklist; 
 
    handleChange(event){ 
        this.value = event.target.value; 
    } 
}
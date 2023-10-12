import { LightningElement,wire } from 'lwc';
import CONTACT_OBJECT from "@salesforce/schema/Contact";
import CONTACT_TYPE from "@salesforce/schema/Contact.Contact_Type__c";
import { getObjectInfo,getPicklistValues,getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
export default class GetPicklistvaluesbyRecordtype extends LightningElement {
value;
    @wire(getObjectInfo, {
        objectApiName: CONTACT_OBJECT
    }) contactinfo;
    
    @wire(getPicklistValues, {
        recordTypeId: "$contactinfo.data.defaultRecordTypeId",
        fieldApiName: CONTACT_TYPE
    }) contacttypepicklist({data,error}){

if(data){
console.log("Contact Data",data);
}else if(error){
console.log("error",error);
}

    }
       @wire(getPicklistValuesByRecordType,{
            recordTypeId: "$contactinfo.data.defaultRecordTypeId",
            objectApiName: CONTACT_OBJECT
        })contacttypepicklistrectype;
        handleChange(event){
        this.value=event.target.value;
        }

    }
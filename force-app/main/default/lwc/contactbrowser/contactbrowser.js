import { LightningElement, wire } from 'lwc';
import getContactListByFilter from "@salesforce/apex/ContactBrowserHandler.getContactListByFilter";

export default class Contactbrowser extends LightningElement {
    
    selectedAccountId="";
    selectedIndustry="";

    @wire(getContactListByFilter,{
        accountId : "$selectedAccountId",
        industry : "$selectedIndustry"

    }) contactsFunction({data,error}){
        if(data){
            console.log("Conatc Data",data);
        }else if(error){
            console.log("Contact Error",error);
        }
    }

    handlerFilterChange(event){

        this.selectedAccountId = event.detail.accountId;
        this.industry = event.detail.industry;

    }
}
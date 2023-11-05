import { LightningElement,wire } from 'lwc';
import getAccountData  from "@salesforce/apex/AccountHelper.getAccountData";
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
export default class ImperativeApexDemo extends LightningElement {
    data=[];
    options=[];
    selectedIndustry;
     columns = [
        { label: 'Name', fieldName: 'Name'},
        { label: 'Industry', fieldName: 'Industry'},
        { label: 'Rating', fieldName: 'Rating'}    
    ];
    
@wire(getObjectInfo,{
    objectApiName:ACCOUNT_OBJECT,
})accountInfo;
    @wire(getPicklistValues,
        {
            recordTypeId:"$accountInfo.data.defaultRecordTypeId",
            fieldApiName:ACCOUNT_INDUSTRY

    })industryPicklist;

    handleChange(event){
        this.selectedIndustry=event.target.value;
        console.log("Selected Industry:", this.selectedIndustry);
    }
   
    clickHandler()
    {
        getAccountData({
            //passing data from Apex(Serverside) to Js(ClientSide)
            inputIndustry:this.selectedIndustry,      
        })
        .then((result)=>{
            console.log("Accound Records result",result);
            this.data=result;
        })
        .catch((error)=>{
            console.log("Account error",error);
        });
    }

}
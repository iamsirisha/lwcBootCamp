import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import { LightningElement ,wire} from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
export default class GetPicklistvalueDemouiObjectInfoApi extends LightningElement {

@wire(getObjectInfo, {
objectApiName:ACCOUNT_OBJECT
})
 accountprop;

 @wire(getPicklistValues,{
    recordtypeId:"$accountprop.data.defaultRecordtypeId",
    fieldApiName:"ACCOUNT_INDUSTRY"

 })
 outputFunction({data,error}){
if(data){
   console.log("picklisst data",data); 
}
else if(error){
    console.log("error",error); 
}
 }
}
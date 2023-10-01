import { LightningElement ,wire} from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class GetObjectInfoDemouiObjectInfoApi extends LightningElement {
    accountInfo;
    accounterror;

    @wire(getObjectInfo,{
        objectApiName:ACCOUNT_OBJECT,
    })
    outputFunction({data,error}){
if(data){
    console.log("data",data);
    this.accountInfo=data;
    this.accounterror=null;
}
else if(error){
    console.log("error",error);
    this.accounterror=error;
    this.accountInfo=null;
}
    }
}
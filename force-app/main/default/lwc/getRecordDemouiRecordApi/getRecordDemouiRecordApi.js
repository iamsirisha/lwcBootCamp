import { LightningElement ,api,wire} from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ANNUAL_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import { getRecord } from 'lightning/uiRecordApi';
export default class GetRecordDemouiRecordApi extends LightningElement {
    @api recordId;
    accname;
    accRevenue;
    @wire(getRecord,
        {
        recordId:"$recordId",
        fields:[ACCOUNT_NAME,ANNUAL_REVENUE]
    }) 
    outputFunction({data,error})
    {
        if(data){
console.log("data Record ",data);
this.accname=data.fields.Name.value;
this.accRevenue=data.fields.AnnualRevenue.value;
        }
        else if(error){
console.log("error",error);
        }

    }



}
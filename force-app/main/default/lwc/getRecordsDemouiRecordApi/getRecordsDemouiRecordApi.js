import { LightningElement,wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import CONTACT_NAME from "@salesforce/schema/Contact.Name";
export default class GetRecordsDemouiRecordApi extends LightningElement {
    outputs;
    errors;

    @wire(getRecords,
        {
            records:[
                {
                 recordIds:["0015g00001GKzARAA1","0015g00001GKzAOAA1"],
                 fields:[ACCOUNT_NAME]
                },
                {
                    recordIds:["0035g00000yN9MCAA0","0035g00000z3mjvAAA"],
                    fields:[CONTACT_NAME]
                }
            ]
        
    })
    outputFunction({data,error}){
        if(data){
            console.log("data",data);
            this.outputs=data;
            this.errors=null;
        }
        else if(error){
            console.log("error",error);
            this.errors=error;
            this.outputs=null;
        }

    }

    
}
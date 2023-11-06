import { LightningElement,wire,api} from 'lwc';
import updateTickerMethod from '@salesforce/apex/AccountHelper.updateTickerMethod';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import TICKER_SYMBOL from "@salesforce/schema/Account.TickerSymbol";
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import TickerSymbol from '@salesforce/schema/Account.TickerSymbol';
import { notifyRecordUpdateAvailable } from 'lightning/uiRecordApi';
export default class ImperativeApexDemoUpdateOperation extends LightningElement {
@api recordId;
accname;
acctickersymbol;
@wire(getRecord,
    {
    recordId:"$recordId",
    fields:[ACCOUNT_NAME,TICKER_SYMBOL]
})outputFunction({data,error}){
   if(data){
console.log("Get Acc Record",data);
this.accname=getFieldValue(data,ACCOUNT_NAME);
this.accticker=getFieldValue(data,TickerSymbol);
   }else if(error)
   {
    console.log("Error Occured",error);
   } 
}
    changeHandler(event){
    this.accticker=event.target.value;
    }
    updateTicker(){
        updateTickerMethod({
            recordId:this.recordId,
            newTicker:this.accticker
        }).then(result=>{
            notifyRecordUpdateAvailable([{ recordId :this.recordId }]);
        console.log("Record Updated Successfully!",result);
    
        }).catch(error=>{
       console.log("Error Occured Update Failed",error);
        })
    };
}
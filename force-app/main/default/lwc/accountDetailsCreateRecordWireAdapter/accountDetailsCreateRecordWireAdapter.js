import { LightningElement,wire ,api} from 'lwc';
import getParentAccounts from '@salesforce/apex/AccountHelper.getParentAccounts';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi'; 
import ACCOUNT_OBJECT from '@salesforce/schema/Account'; 
import ACCOUNT_SLA_TYPE from '@salesforce/schema/Account.SLA__c'; 
import ACCOUNT_PARENT from '@salesforce/schema/Account.ParentId'; 
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'; 
import ACCOUNT_SLA_EXIRY_DT from '@salesforce/schema/Account.SLAExpirationDate__c'; 
import ACCOUNT_NO_OF_LOCATION from '@salesforce/schema/Account.NumberofLocations__c'; 
import ACCOUNT_DESCRIPTION from '@salesforce/schema/Account.Description'; 
import ACCOUNT_ID from '@salesforce/schema/Account.Id';

import { createRecord, deleteRecord, getFieldValue, getRecord } from 'lightning/uiRecordApi';
	
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const fieldstoLoad=[ACCOUNT_PARENT,ACCOUNT_NAME,ACCOUNT_SLA_EXIRY_DT,ACCOUNT_SLA_EXIRY_DT,ACCOUNT_NO_OF_LOCATION,ACCOUNT_DESCRIPTION];

export default class AccountDetailsCreateRecordWireAdapter extends NavigationMixin(LightningElement) {

    parentoptions = []; 
    selParentAcc = ""; 
    selnoOfLocations = "1"; 
    selAccName = ""; 
    selExpDate = null; 
    selSlaType = ""; 
    selDescription = ""; 
    @api recordId;
    
    @wire(getRecord, {
    recordId :"$recordId",
     fields :fieldstoLoad

    })wiredgetRecord_Function({data,error})
    {
     if(data){
     this.selParentAcc=getFieldValue(data,ACCOUNT_PARENT);
     this.selAccName=getFieldValue(data,ACCOUNT_NAME);
     this.selDescription=getFieldValue(data,ACCOUNT_DESCRIPTION);
     this.selExpDate=getFieldValue(data,ACCOUNT_SLA_EXIRY_DT);
     this.selSlaType=getFieldValue(data,ACCOUNT_SLA_TYPE);
     this.selnoOfLocations=getFieldValue(data,ACCOUNT_NO_OF_LOCATION);
    }
 else if(error)
 {
console.log("Error message During the Retrieval",error);
 }
}
    //This method is an example of how we can get data from Apex and populate the value in combobox 
    //getParentAccounts is method in accountHelper Apex class 
    //This wire method should return the list which the combobox should understand 
    //Initialize this.parentoptions array to null and then assign the result of data.map in this.parentoptions 
    @wire(getParentAccounts)
    wired_getParentAccount({data, error}){ 
        this.parentoptions = []; 
        if(data){ 
            //In this data, we need need to iterate over that data [use map method] 
            //Whenever we need to return data from map, use currly braces after => 
            //combobox will return data in the form of label and value, so put label and value in {} 
            //Will populate Id in value and Name in label 
            this.parentoptions = data.map((currItem) => ({ 
                label : currItem.Name, 
                value : currItem.Id 
            })); 
        }else if(error){ 
            console.log('Error while getting Parent Records', error); 
        } 
    } 
 
    @wire(getObjectInfo, { 
        objectApiName : ACCOUNT_OBJECT 
    }) accountobjectinfo; 
 
    @wire(getPicklistValues, { 
        recordTypeId : '$accountobjectinfo.data.defaultRecordTypeId', 
        fieldApiName : ACCOUNT_SLA_TYPE 
    }) slapicklist; 
 
 
    handleChange(event){ 
        let { name, value } = event.target; 
        if(name == 'parentacc'){ 
            this.selParentAcc = value; 
        } 
        if(name == 'accname'){ 
            this.selAccName = value; 
        } 
        if(name == 'slaexpdt'){ 
            this.selExpDate = value; 
        } 
        if(name == 'slatype'){ 
            this.selSlaType = value; 
        } 
        if(name == 'nooflocations'){ 
            this.selnoOfLocations = value; 
        } 
        if(name == 'description'){ 
            this.selDescription = value; 
        } 
         
 
    } 
 
    saveRecord(){ 
        console.log("ACCOUNT_OBJECT", ACCOUNT_OBJECT); 
        console.log("ACCOUNT_NAME", ACCOUNT_NAME); 
        if(this.validateInput()){ 
            let inputfields ={}; 
            inputfields[ACCOUNT_NAME.fieldApiName] = this.selAccName; 
            inputfields[ACCOUNT_PARENT.fieldApiName] = this.selParentAcc; 
            inputfields[ACCOUNT_SLA_EXIRY_DT.fieldApiName] = this.selExpDate; 
            inputfields[ACCOUNT_SLA_TYPE.fieldApiName] = this.selSlaType; 
            inputfields[ACCOUNT_NO_OF_LOCATION.fieldApiName] = this.selnoOfLocations; 
            inputfields[ACCOUNT_DESCRIPTION.fieldApiName] = this.selDescription; 
            if(this.recordId)
            {
                inputfields[ACCOUNT_ID.fieldApiName] = this.recordId; 
                let recordInput={
                    fields:inputfields
                };
                updateRecord(recordInput)
                .then((result)=> {
                    console.log("Record updated Succesfully!",result);
                    console.log("Before Show Toast Event");
                    this.showToast();
                    console.log("After Show Toats Event");
                }).catch((error)=>{
                    
                        console.log("Error!",error);
                });
               
            } else
            {
                let recordInput = { 
                    apiName : ACCOUNT_OBJECT.objectApiName, 
                    fields : inputfields 
                }; 
     
                createRecord(recordInput).then((result) => { 
                    console.log("Account created successfully", result); 
                    let pageRef={
                        type: "standard__recordPage",
                                attributes: {
                                    recordId: result.id,
                                    objectApiName: ACCOUNT_OBJECT.objectApiName,
                                    actionName: "view"
                      }};
                      this[NavigationMixin.Navigate](pageRef);
                }) 
                    .catch((error) => { 
                    console.log("Error in creation", error); 
                }); 

            }
            
         } else { 
            console.log("Inputs are not valid");
        }
         }
         validateInput(){
             let fields=Array.from(this.template.querySelectorAll(".validateme"));
             let isValid=fields.every((currItem)=>currItem.checkValidity());
             return isValid;
         }

         get formTitle(){
         if(this.recordId)
         {
            return "Edit Account";
         }
            else
            {
                return "Create Account";
            }
         }
         get IsDelete(){
            if(this.recordId)
            {
               return true;
            }
               else
               {
                   return false;
               }
            }

         showToast() {
            const event = new ShowToastEvent({
                title: 'Success!',
                message:
                    'Record Updated Successfully!.',
            });
            this.dispatchEvent(event);
        }
        deleteHandler()
        {
            deleteRecord(this.recordId)
            .then(()=>{
            console.log("Record Deleted Successfully!");

           let pageRef={
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ACCOUNT_OBJECT.objectApiName',
                actionName: 'list'
            },
            state:{
                filterName:"Recent"
            }
        };
        this[NavigationMixin.Navigate]({pageRef}); 
        })
        .catch((error)=> {
            console.log("Record Deleted failer", error);
        });
    }
 }
        


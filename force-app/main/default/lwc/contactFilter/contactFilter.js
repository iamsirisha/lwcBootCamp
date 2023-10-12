import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from "@salesforce/schema/Account";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';

export default class ContactFilter extends NavigationMixin(LightningElement) {
    selectedIndustry;
    selectedAccountId;
    isButtonDisabled = true;

    @wire(getObjectInfo,{
        objectApiName : ACCOUNT_OBJECT
    }) accountinfo;

    @wire(getPicklistValues,{
        recordTypeId : "$accountinfo.data.defaultRecordTypeId",
        fieldApiName : ACCOUNT_INDUSTRY
    }) industrypicklist;

    selectedRecordHandler(event){

        this.selectedAccountId = event.detail;
        console.log("this.selectedAccountId",this.selectedAccountId);

        if(this.selectedAccountId){
            this.isButtonDisabled = false;
        } else
        {
            this.isButtonDisabled = true;
        }

        this.notifyFilterChange();

    }

    changehandler(event){
        this.selectedIndustry = event.target.value;
        this.notifyFilterChange();

    }

    addNewContact(){

        let defaultValue = encodeDefaultFieldValues({
            AccountId : this.selectedAccountId
        });

        let pageRef =  {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            },
            state: {
                defaultFieldValues : defaultValue
            }
        };
        this[NavigationMixin.Navigate](pageRef);

    }
    
    notifyFilterChange(){
        let myCustomEvent = new CustomEvent('filterchange',{
            detail : {
                accountId : this.selectedAccountId,
                industry : this.selectedIndustry
            }
        });

        this.dispatchEvent(myCustomEvent);
    }
   
}
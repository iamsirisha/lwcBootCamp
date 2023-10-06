import { LightningElement } from 'lwc';
import {NavigationMixin} from "lightning/navigation";
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavigationDemo extends NavigationMixin (LightningElement){
    navHomeClickHandler(event){

        let pageRef={
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        };
        this[NavigationMixin.Navigate](pageRef);
    }

    navaccounthomepage(event){

    // Navigates to account list with the filter set to Recent.
    let pageRef=
{
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'list'
    },
    state: {
        filterName: 'PlatinumandGoldSLACustomers'
  }
}
this[NavigationMixin.Navigate](pageRef);
    }
    createaccountHandler(event){
    let pageRef=
   
    {
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Account',
            actionName: 'new'
        },
        
    }
    this[NavigationMixin.Navigate](pageRef);
    }
    createaccountHandlerdefaultvalues(event){
        const defaultValues =encodeDefaultFieldValues({
            Type	 : "Prospect",
            SLA : "Gold"
        }
);
let pageRef={
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'new'
    },
    state: {
        defaultFieldValues : defaultValues 
    }
    };
    this[NavigationMixin.Navigate](pageRef);
    }
    editClickAccHandler(event){
let pageRef={
    type: 'standard__recordPage',
    attributes: {
        recordId: '0015g00001GKzAOAA1',
        objectApiName: 'Account',
        actionName: 'edit'
    }
}
this[NavigationMixin.Navigate](pageRef);
    }
}
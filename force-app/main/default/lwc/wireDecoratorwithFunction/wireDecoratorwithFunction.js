import { LightningElement,wire } from 'lwc';
import getAccountData  from '@salesforce/apex/AccountHelper.getAccountData';
const columns = [
    { label: 'Account Name', fieldName: 'Name'},
    { label: 'Account Industry', fieldName: 'Industry'},
    { label: 'Account Rating', fieldName: 'Rating'},
];
export default class WireDecoratorwithFunction extends LightningElement
{
accounts;
errors;
columns = columns;
@wire(getAccountData) accountfunction({error,data}){
if(data)
{
    let updatedAccounts=data.map(currItem=>{
    let updatedObject={};
    //if curritem has no Rating 
    if(!currItem.hasOwnProperty('Rating')){
        //copying all curritemsinto updatedArray and populate Rating with Warm
        updatedObject={...currItem,Rating:"Warm"};
    }
    else
    {
        updatedObject={...currItem};   
    }
return updatedObject;
})
console.log("data",data);
console.log("updatedAccounts",updatedAccounts);
this.accounts=[...updatedAccounts];
this.errors=null;
}else if(error)
{
this.accounts=null;
this.errors=error;
console.log("error",error);
}
}   
}
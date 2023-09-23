import { LightningElement } from 'lwc';

export default class ChildHook extends LightningElement {
   
    constructor(){
super();
console.log(" Child Constructor"); 
    }
    connectedCallback(){
        console.log("connectedCallbackfrom Child");
        throw new Error("Error While Component loading"); 
        
    }
    renderedCallback(){
        console.log("renderedCallback from Child"); 
    }
    errorCallback(error,stack)
    {
        console.log("errorCallback from Child");
        
    }
    disconnectedCallback(){
        console.log("disconnectedCallback from Child");
    }
        

        
}
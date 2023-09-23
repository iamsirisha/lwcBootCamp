import { LightningElement } from 'lwc';

export default class ParentHook extends LightningElement {
    displayChild=false;
    constructor(){
        super();
        console.log(" Parent Constructor"); 

    }
    connectedCallback(){
        console.log("connectedCallback from Parent"); 
    }
    renderedCallback(){
        
       console.log("renderedCallback from Parent"); 
    }
    errorCallback(error,stack)
    {
        console.log("errorCallback from Parent");
        console.log("error",error);
        console.log("stack",stack);

    }
    disconnectedCallback(){
        console.log("disconnectedCallback from Parent");
    }
    changeHandler(event)
        {
            this.displayChild=event.target.checked;
            
                }
}
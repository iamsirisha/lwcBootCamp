import { LightningElement } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    numberone="";//initialising numberone,numbertwo as text
    numbertwo="";
    result=0;//initialising esult with 0
    changeHandlerNumberOne(event)
    {
        //event.target.value-to read the values of input
        //this.numberpne-to store the value
        this.numberone=event.target.value;
        console.log("numberone",this.numberone)

    }
    changeHandlerNumberTwo(event)
    {
        this.numbertwo=event.target.value;
        console.log("numbertwo",this.numbertwo)

    }
    addHandler(event)
    {
        //when we put anythng inside any method or function we need to put this.reslut
     this.result=parseInt(this.numberone)+parseInt(this.numbertwo);
    }
    subHandler(event)
    {
        this.result=parseInt(this.numberone)-parseInt(this.numbertwo);
    }
    mulHandler(event)
    {
        this.result=parseInt(this.numberone)*parseInt(this.numbertwo);
    }
    divHandler()
    {
        this.result=parseInt(this.numberone)/parseInt(this.numbertwo);
    }

}
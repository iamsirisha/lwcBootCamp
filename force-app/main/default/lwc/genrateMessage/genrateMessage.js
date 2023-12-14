import { LightningElement } from 'lwc';

export default class GenrateMessage extends LightningElement {
    firstname="";
    lastname="";
    
    changeHandler(event)
    {
        let {name,value}=event.target;
        if(name === "fname")
        {
        this.firstname=value;
        }
        else if(name === "lname"){
        this.lastname=value;
        }

    }
    clickHandler()
    {
 let fullname  = ` ${this.firstname} ${this.lastname} `.toUpperCase();
//1.Create Custom Event
let myCustomEvent=new CustomEvent("message",{
    detail:{
        fullname:fullname
    }

});
//2.dispatch Event
this.dispatchEvent(myCustomEvent);


    }
}
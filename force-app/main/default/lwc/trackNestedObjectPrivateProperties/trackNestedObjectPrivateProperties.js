import { LightningElement,track } from 'lwc';

export default class TrackNestedObjectPrivateProperties extends LightningElement {
 @track myDetails={fname:"Sirisha", lname:"Gudla"};
 @track myTasks=["BootCamp","Meeting","Office"];
 myNewDetails={fname:"Priyansh",lname:"Prathick"};

clickHandler(event)
{
    //only trigger rerender because of @track Property 
this.myDetails.fname="Sirius";
}

taskHandler(event){
     //only trigger rerender because of @track Property 
    this.myTasks.push("Practicing LWC");
   

}
refreshHandler(event){
    // re Assignments  trigger rerender with or without @track Property 
   this.myTasks=[...this.myTasks,"Self Study"];
   this.myNewDetails={fname:"Sirius",lname:"Priyansh"};

}

}
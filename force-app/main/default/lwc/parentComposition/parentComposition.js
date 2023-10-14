import { LightningElement } from 'lwc';

export default class ParentComposition extends LightningElement {
   
    firechildHandler(){
 console.log("Event Handled in Parent- At Child Level");
    }
    firechildDivHandler(){
console.log("Event handled in Parent Comonent -At Div Level");
            }
}
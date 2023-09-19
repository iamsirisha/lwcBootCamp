import { LightningElement } from 'lwc';

export default class BestPracticeCalculator extends LightningElement {
    numberone = ""; // initializing numberone and numbertwo as text
    numbertwo = "";
    result = 0; // initializing result with 0

    changeHandler(event) {
        let { name, value } = event.target;

        if (name === "number1") {
            this.numberone = value;
        } else if (name === "number2") { 
            this.numbertwo = value;
        }
    }

    calculateInput(event) {
        let labelelement = event.target.label;

        if (labelelement === "Add") {
            this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
        } else if (labelelement === "Subtract") {
            this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
        } else if (labelelement === "Multiply") {
            this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
        } else if (labelelement === "Division") {
            this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
        }
         //reset
    this.numberone="";
    this.numbertwo=""
    }
   
}

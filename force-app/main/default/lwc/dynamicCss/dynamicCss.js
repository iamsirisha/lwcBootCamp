import { LightningElement } from 'lwc';

export default class DynamicCss extends LightningElement {
//defining the pColor Class in js
    pColor = "blue-color";

    addCssHandler(event)
    {
   let element=this.template.querySelector("p");
   element.classList.add("pink-border");
    }
    removeCssHandler(event)
    {
        let element=this.template.querySelector("p");
        element.classList.remove("pink-border");
    }
    toggleCssHandler(event){
        let element=this.template.querySelector("p");
        element.classList.toggle("pink-border");

    }

}
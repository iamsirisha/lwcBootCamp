import { LightningElement ,track} from 'lwc';

export default class TracklwcBootCamp extends LightningElement {
greeting="Hello";
@track welcome="Iam Leanring about Track Decorator.For primitive datatypes if we put track or not not no matter it will be private track property ";
clickHandler(event){
this.greeting='Namaste!';
this.welcome='Ankit Sir';
}


}
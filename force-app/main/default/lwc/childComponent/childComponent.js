import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

@api display; //small
@api displayGreeting;//camelcase
//@api user;//object
//usage of getter and setter
displayuser;
@api isEmployed =false;//boolean
 set user(value){
    //we are cloning object here becuase we can't perfoem directly any operation on object
    let cloneuser={... value};
    this.displayuser=cloneuser.firstname.toUpperCase();

 }

 @api
 get user(){
    return this.displayuser;
 }




}
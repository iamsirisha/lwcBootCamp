import { LightningElement,api } from 'lwc';

export default class ChildComponent extends LightningElement {

@api display; //small
@api displayGreeting;//camelcase
@api user;//object
@api isEmployed =false;//boolean


}
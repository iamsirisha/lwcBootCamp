import { LightningElement,wire,api } from 'lwc';
import searchAccountReords from "@salesforce/apex/AccountCustomLookupHandler.accountSearchRecords";
const DELAY = 300;
export default class ContactCustomLookup extends LightningElement {
    @api apiName = "Account";
    searchValues;
    @api objectLabel = "Account";
    @api iconName = "standard:account";
    delayTimeout;
    selectedRecord ={
        selectedId : "",
        selectedName : ""
    }
    displatOption = false;
    @wire(searchAccountReords,{
        objectApiName : "$apiName",
        searchKey : "$searchValues"

    }) accoutoutputs;

    get isRecordSelected(){
        return this.selectedRecord.selectedId === "" ? false : true;
    }

    changeHandler(event){
        window.clearTimeout(this.delayTimeout);
       let enteredValue = event.target.value;

       this.delayTimeout = setTimeout(() => {
        this.searchValues = enteredValue;
        this.displatOption = true;
        
    }, DELAY);
    }

    clickHandler(event){
        let selectedId = event.currentTarget.dataset.item;
        console.log("selectedId",selectedId);

        let outputRecord = this.accoutoutputs.data.find((currentItem)=>currentItem.Id === selectedId); 
        
        this.selectedRecord = {
            selectedId : outputRecord.Id,
            selectedName : outputRecord.Name
        };
        this.sendSelection();
        this.displatOption = false;
    }

    removeselectHandler(event){

        this.selectedRecord ={
            selectedId : "",
            selectedName : ""
        };
        this.sendSelection();
        this.displatOption = false;
    }

    sendSelection(){

        let mySelectionevent = new CustomEvent("selectrec",{
            detail : this.selectedRecord.selectedId
        });

        this.dispatchEvent(mySelectionevent);
    }

}
import { LightningElement, wire,api } from 'lwc';
import searchRecords from "@salesforce/apex/customLookupController.searchRecords";
const DEALY = 300;
export default class Customlookup extends LightningElement {
    //to pass these paramters to apex methodclass
    @api apiName = "Account";
    searchvalue ;
    @api objectLabel = "Account";
    @api iconName = "standard:account";
    dealyTimeout;
    selectedRecord = {
        selectedId: "",
        selectedName: ""
    };

    displayOptions = false;
//wire method calls paramters values are chnaging (Reactive Properties)and when component loads framwork calls
    @wire(searchRecords, {
        objectApiName: "$apiName",
        searchKey: "$searchvalue"

    }) 
    outputs;
    //getter method works -if outputs has data then display 
    get isRecordSelected(){
        return this.selectedRecord.selectedId === ""? false : true;
    }
    changeHandler(event){
        window.clearTimeout(this.dealyTimeout);
        let enteredValue = event.target.value;
 //Debouncing-donot updtae the reactive properties as long as this function is being delayes called debouncing
        this.dealyTimeout = setTimeout(()=>{
            this.searchvalue = enteredValue;
            this.displayOptions = true;

        }, DEALY);
        
    }
    clickHandler(event){
        let selectedId = event.currentTarget.dataset.item;
        console.log("selectedId",selectedId);

        let outputRecord = this.outputs.data.find(
            (CurrentItem)=>CurrentItem.Id == selectedId);
            this.selectedRecord = {
                selectedId : outputRecord.Id,
                selectedName : outputRecord.Name 
            };
            this.displayOptions = false;
    }
    removelHandler(event){
        this.selectedRecord = {
            selectedId : "",
            selectedName : ""
        };
        this.displayOptions = false;
    }
    
}
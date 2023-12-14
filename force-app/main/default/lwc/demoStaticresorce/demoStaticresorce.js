import { LightningElement ,track} from 'lwc';
import STATIC_RESOURCE from "@salesforce/resourceUrl/ChannelLogo";
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";

export default class DemoStaticresorce extends LightningElement
 {

   accIndustry="";
    CompanyLogo= STATIC_RESOURCE;


    @track userInput = '';

    handleInputChange(event) {
        this.userInput = event.target.value;
    }

    saveData() {
        // Check if local storage is supported
        if (typeof Storage !== 'undefined') {
            // Save the user input to local storage
            localStorage.setItem('userInputData', this.userInput);
            // Optionally, you can display a success message or perform additional actions here
            console.log('Data saved to local storage:', this.userInput);
        } else {
            console.error('Local storage is not supported in this browser.');
            // Optionally, you can provide a user-friendly message or fallback mechanism
        }
    }
 }
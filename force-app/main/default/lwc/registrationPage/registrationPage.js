import { LightningElement} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import  backgroundUrl from '@salesforce/resourceUrl/santa';
 
export default class RegistrationPage extends NavigationMixin(LightningElement) {
    get backgroundStyle(){
        return `height:20rem;background-image:url(${backgroundUrl})`;  
    }
    clickHandler()
    {
        
            // Navigate to the Account home page
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                url: 'https://empathetic-raccoon-d9jmb2-dev-ed.lightning.force.com/lightning/page/home'
    }
            });
        }
    
}
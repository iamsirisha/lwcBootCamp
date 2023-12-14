import { LightningElement ,api} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class HeaderlessQuickAction extends LightningElement {
@api invoke(){

    //navigate to contact Home Page
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Contact',
            actionName: 'home',
        },
    });

}


}
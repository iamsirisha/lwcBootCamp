import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert';
import LightningConfirm from 'lightning/confirm';
import LightningPrompt from 'lightning/prompt';
export default class DialogBoxDemo extends LightningElement 
{
    async confirmHandler()
    {
        const result = await LightningConfirm.open({
            message: 'this is the prompt message',
            variant: 'headerless',
            label: 'Are you Sure',
            theme:"success"
            // setting theme would have no effect
        });
        console.log(result);
        //Confirm has been closed
        //result is true if OK was clicked
        //and false if cancel was clicked
    }
    async promptHandler()
    {
        LightningPrompt.open({
            message: 'this is the prompt message',
            //theme defaults to "default"
            label: 'Please Respond', // this is the header text
            defaultValue: 'initial input value', //this is optional
        }).then((result) => {
            //Prompt has been closed
            //result is input text if OK clicked
            //and null if cancel was clicked
        });
        console.log(result);
    }
    async alertHandler()
    {
        await LightningAlert.open({
            message: 'this is the alert message',
            theme: 'error', // a red theme intended for error states
            label: 'Error!', // this is the header text
        });
        //Alert has been closed
    }
}
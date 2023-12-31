import { LightningElement,wire } from 'lwc';
import  YOUTUBECHANNELLOGO from '@salesforce/resourceUrl/ChannelLogo';
import  ASSETLOGO  from '@salesforce/contentAssetUrl/thflogopng';
import  GREETING from '@salesforce/label/c.greeting';
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';
import LOGGEDINUSER from "@salesforce/user/Id";
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from "@salesforce/schema/User.Name";
import CHECK_PERMISSION from "@salesforce/customPermission/displayText";
import { loadStyle ,loadScript } from 'lightning/platformResourceLoader';
import ANIMATETHIRDPARTYCSS from '@salesforce/resourceUrl/ThirdPartyCss';
import THIRDPARTYJS from '@salesforce/resourceUrl/ThirdPartyJs';


export default class StaticResourceDemo extends LightningElement
 {
    mystatresFile=YOUTUBECHANNELLOGO;
    myAssetLogo= ASSETLOGO;
 isFirstLoad=true;
 name="";
displayDate="";
    get CheckPermission(){
        return CHECK_PERMISSION;
     }
     renderedCallback()
     {
        if(this.isFirstLoad)
        {
            this.isFirstLoad=false;
            Promise.all([
                loadStyle(this,ANIMATETHIRDPARTYCSS),loadScript(this,THIRDPARTYJS)
            ])
         .then(()=> {
            console.log("File loaded Succesfully!")
            this.fetchDate();
        })
        .catch((error) => {
            console.log("File Loaded failed",error);
        });
        }
     
     }
label={
    platorm:SALESFORCE_PLATFORM,
    greeting:GREETING
};

@wire(getRecord,{
    recordId: LOGGEDINUSER,
    fields:[NAME_FIELD]
}) 
wired_User_details({data,error})
{
    if(data)
    {
    console.log("Logged in User Details Data",data);
    this.name = getFieldValue(data, NAME_FIELD);
    }
    else if(error)
    {    console.log("Logged In User Details Error ",error);

    }
}
 fetchDate()
 {
    this.displayDate=moment().format('LLL');
 }
}
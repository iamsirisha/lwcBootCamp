import { LightningElement,wire } from "lwc";
import getProfilePhoto from "@salesforce/apex/LinkedinIntegration.getProfilePhoto";
import Id from "@salesforce/user/Id";
import NAME_FIELD from "@salesforce/schema/User.Name";
import EMAIL_FIELD from "@salesforce/schema/User.Email";
import{ getFieldValue,getRecord } from "lightning/uiRecordApi";

export default class DisplayUserProfile extends LightningElement {
    
    profileAddress="";
    profileAddressError="";
    userName;
    userEmail;
    @wire(getProfilePhoto) profilemethod({data,error})
    {
if(data)
{
    console.log(data);
    this.profileAddress=data;
    this.profileAddressError=null;
}
else if(error)
{
    console.log(error);
        this.profileAddressError=error;
        this.profileAddress=null;
}
    }
    @wire(getRecord,{
        recordId :Id,
        fields: [NAME_FIELD, EMAIL_FIELD]
    })
    currentUserInfo({data,error}){
        if(data){
this.userName=getFieldValue(data,NAME_FIELD)
this.userEmail=getFieldValue(data,EMAIL_FIELD)
        }
else if(error)
{
console.log("User Info Error " +error);

}

    }
}
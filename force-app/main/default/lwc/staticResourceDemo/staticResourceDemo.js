import { LightningElement } from 'lwc';
import  YOUTUBECHANNELLOGO from '@salesforce/resourceUrl/ChannelLogo';
import  ASSETLOGO  from '@salesforce/contentAssetUrl/thflogopng';
import  GREETING from '@salesforce/label/c.greeting';
import SALESFORCE_PLATFORM from '@salesforce/label/c.salesforcePlatform';
export default class StaticResourceDemo extends LightningElement
 {
    mystatresFile=YOUTUBECHANNELLOGO;
    myAssetLogo= ASSETLOGO;

label={
    platorm:SALESFORCE_PLATFORM,
    greeting:GREETING
};



}
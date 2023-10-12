public with sharing class AccountCustomLookupHandler {
    @AuraEnabled(cacheable=true)
    Public Static List<sObject> accountSearchRecords(String objectApiName, String searchKey)
    {
        List<sObject> sObjectList = New List<sObject>();
        if(String.isNotBlank(searchKey)){
            String key = '%' + searchKey + '%';
            String queryString = 'Select Id,Name from ' + objectApiName + ' WHERE Name Like :key';
            sObjectList = Database.query(queryString,AccessLevel.USER_MODE);
    
    }
    return sObjectList;
    }
    }
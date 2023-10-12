public with sharing class ContactBrowserHandler {
    @AuraEnabled(cacheable=true)
   
    Public Static List<Contact> getContactListByFilter(
       String accountId,
       String industry
    ){
   
       String query = 'Select Id,Name,Title,Email,Phone,photoUrl from Contact';
       List<String> filters = New List<String>();
       if(String.isNotBlank(accountId)){
           filters.add('accountId = :accountId');
       }
   
       if(String.isNotBlank(industry)){
           filters.add('Contact.Account.Industry = :industry');
       }
   
       if(!filters.isEmpty()){
           query += ' WHERE ' + String.join(filters, ' AND ');
       }
   
       query += ' WITH USER_MODE ';
       query += 'ORDER BY Name';
       
       system.debug('Query'+query);
       List<Contact> conList = Database.query(query);
       return conList;
   
    }
   
   }
   
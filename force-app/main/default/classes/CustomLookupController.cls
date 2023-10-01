public  class CustomLookupController {

    @AuraEnabled(Cacheable=true)
    public static List<SObject> searchRecords(String objectApiName, String searchKey){
    List<Sobject> sobjectlist=new List<Sobject>();
    
        if(String.isNotBlank(searchKey))
        {
    String  key= '%'+ searchKey +'%';
    String querystring ='Select Id,Name From ' + objectApiName + ' where Name like:key';
   sobjectlist=Database.query(querystring,AccessLevel.USER_MODE);
        }
     return sobjectlist;   
    }
  
    
}
public with sharing class AccountHelper
{
@AuraEnabled(cacheable=true)
public static List<Account> getAccountData(String inputIndustry)
{
return
[Select Id,Name,Industry,Rating from Account where Industry=:inputIndustry
 with USER_MODE];

}
@AuraEnabled(cacheable=true)
public static List<Account> getParentAccounts()
{

return [Select Id,Name,Industry,SLA__c from Account where AnnualRevenue!=null with USER_MODE];    
}

@AuraEnabled
public static string updateTickerMethod(String recordId,String newTicker){
    Account acc=new Account(Id=recordId,TickerSymbol=newTicker);
    try{
        update acc;
        return 'Success';

    }
    catch(Exception ex){
  return ex.getMessage();
    }
}
}
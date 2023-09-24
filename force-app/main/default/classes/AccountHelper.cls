public with sharing class AccountHelper
{
@AuraEnabled(cacheable=true)
public static List<Account> getAccountData()
{
return
[Select Id,Name,Industry,Rating from Account
 with 
 USER_MODE];

}
}

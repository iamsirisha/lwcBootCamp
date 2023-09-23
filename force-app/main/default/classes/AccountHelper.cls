public class AccountHelper
{

@AuraEnabled(cacheable=true)
public static List<Account> getAccountData()
{
return
[Select id,Name,Industry,Rating from Account
 with 
 USER_MODE];

}
}

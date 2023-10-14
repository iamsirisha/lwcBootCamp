public class ContactController 
{
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsList()
    {
        List<Contact> Contactlist=[Select id,
        Name,
        FirstName, 
        LastName,
        Email,
        PhotoUrl,
        Phone,
        Title
         from 
         Contact where 
         PhotoUrl != null with USER_MODE 
         LIMIT 10];
         
         return Contactlist;

    }
    
    
}
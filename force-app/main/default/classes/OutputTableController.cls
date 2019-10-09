public class OutputTableController {
    @AuraEnabled
    public static String getContacts(){
        return JSON.serialize([SELECT Id, FirstName, LastName, Birthdate, Amount__c, Email FROM Contact]);
    }

    @AuraEnabled
    public static String updCont(String contactJson){
        Contact cont = (Contact)JSON.deserialize(contactJSON, Contact.class);
        upsert cont;
        return JSON.serialize(cont);
    }
}

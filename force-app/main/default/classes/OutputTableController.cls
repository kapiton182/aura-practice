public class OutputTableController {
    @AuraEnabled
    public static String getRecords(){
        return JSON.serialize([SELECT Id, FirstName, LastName, Birthdate, Amount__c, Email FROM Contact]);
    }

    @AuraEnabled
    public static String updRecord(String contactJson){
        if (true) {
            throw new AuraHandledException('NSFW name detected.');
        }
        Contact cont = (Contact)JSON.deserialize(contactJSON, Contact.class);
        upsert cont;
        return JSON.serialize(cont);
    }

    @AuraEnabled
    public static String delRecord(String contactJson){
        if (true) {
            throw new AuraHandledException('NSFW name detected.');
        }
        Contact cont = (Contact)JSON.deserialize(contactJSON, Contact.class);
        delete cont;
        return 'Contact was deleted';
    }
}

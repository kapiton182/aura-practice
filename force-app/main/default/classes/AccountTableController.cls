public class AccountTableController {
    @AuraEnabled
    public static String getRecords(){
        return JSON.serialize([SELECT Id, Name, Site, Industry FROM Account]);
    }

    @AuraEnabled
    public static String updRecord(String contactJson){
        Account cont = (Account)JSON.deserialize(contactJSON, Account.class);
        upsert cont;
        return JSON.serialize(cont);
    }

    @AuraEnabled
    public static String delRecord(String contactJson){
        Account cont = (Account)JSON.deserialize(contactJSON, Account.class);
        delete cont;
        return 'Contact was deleted';
    }
}

({
    updateRecord : function(component, event, helper) {
        component.updateCard(component.get('v.record'));
        component.
    },

    deleteRecord : function(component, event, helper) {

    },

    clearCard : function(component, event, helper) {
        component.set('v.record', null);
    }
})

({
    getData : function(component, event) {
        var action = component.get('c.getContacts');

        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === 'SUCCESS') {
                component.set('v.data', JSON.parse(response.getReturnValue()));
            }
            else {
                console.log('NACHALNIK OSHIBKA');
            }
        });
        $A.enqueueAction(action);
    },

    showContactDetails : function(component, row) {
        component.set('v.row', row);
    },

    clearCard : function(component, event) {
        component.find('card').clearCard();
    },
})

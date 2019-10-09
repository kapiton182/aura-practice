({
    doInit : function(component, event, helper) {
        var columns = [
            {label:'FirstName' , fieldName:'FirstName' , type:'text' },
            {label:'LastName' , fieldName:'LastName' , type:'text' },
            {label: 'Birthdate', fieldName: 'Birthdate', type: 'date'},
            {label: 'Amount', fieldName:'Amount__c' , type: 'number'},
            {label:'Email' , fieldName:'Email' , type:'email' },
            {label: 'Action', type: 'button', initialWidth: 150, typeAttributes:
            {label: 'Show / Hide', title: 'Show / Hide', name: 'view_details'}},
        ];

        component.set('v.columns', columns);

        helper.getData(component, event);

    },

    updateTable : function(component, event, helper) {
        component.set('v.data', component.get('v.data'));
    },

    handleRowAction : function(component, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'view_details':
                if (component.get('v.row.Id') === row.Id) {
                    helper.clearCard(component);
                } else {
                    helper.showContactDetails(component, row);
                }
                break;
            default:
                helper.showContactDetails(component, row);
                break;
        }
    },

    clearCard : function(component, event, helper) {
        helper.clearCard(component);
    },

    updateRecord : function(component, event, helper) {
        var param = event.getParam('arguments');
        // console.log('i am in update record func');
        var obj = JSON.parse(JSON.stringify(param.updatingRecord));
        // console.log(obj);
        var action = component.get('c.updCont');
        action.setParams({
            contactJson : JSON.stringify(param.updatingRecord)
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                helper.clearCard(component);
                component.set('v.row', JSON.parse(response.getReturnValue()));
            } else {
                console.log('SMTH WRONG');
            }
        });

        $A.enqueueAction(action);
    },


})

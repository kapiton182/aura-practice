({
    doInit: function (component, event, helper) {
        helper.getData(component, event);
    },

    handleRowAction: function (component, event, helper) {
        var id = event.getSource().get('v.value');
        var row = component.get('v.data').find(record => record.Id === id);
        helper.showContactDetails(component, row);
        component.set('v.currentBtn', event.getSource());
        component.set('v.currentRow', JSON.stringify(row));
    },

    clearCard: function (component, event, helper) {
        console.log('Im super controller');
    },

    updateRecord: function (component, event, helper) {
        var param = event.getParam('arguments');
        helper.updateRecord(component, param, () => helper.getData(component, event));
    },

    deleteRecord: function (component, event, helper) {
        var param = event.getParam('arguments');
        helper.deleteRecord(component, param, () => helper.getData(component, event));
    },
})

({
  doInit: function (component, event, helper) {
    var columns = [
      { label: 'FirstName', fieldName: 'FirstName', type: 'text' },
      { label: 'LastName', fieldName: 'LastName', type: 'text' },
      { label: 'Birthdate', fieldName: 'Birthdate', type: 'date' },
      { label: 'Amount', fieldName: 'Amount__c', type: 'number' },
      { label: 'Email', fieldName: 'Email', type: 'email' },
      {
        label: 'Action', type: 'button', initialWidth: 150, typeAttributes:
          { label: 'Show / Hide', title: 'Show / Hide', name: 'view_details' }
      },
    ];

    component.set('v.columns', columns);

    helper.getData(component, event);

  },

  handleRowAction: function (component, event, helper) {
    var row = event.getParam('row');
    var btn = component.find(row.Id);
    console.log(btn);
    if (component.get('v.row.Id') === row.Id) {
      helper.clearCard(component);
    } else {
      helper.showContactDetails(component, row);
    }
  },

  clearCard: function (component, event, helper) {
    helper.clearCard(component);
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

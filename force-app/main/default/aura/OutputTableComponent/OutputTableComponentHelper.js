({
  getData: function (component, event) {
    var action = component.get('c.getRecords');

    action.setCallback(this, function (response) {
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

  showContactDetails: function (component, record) {
    component.set('v.row', record);
  },

  clearCard: function (component, event) {
    component.find('card').clearCard();
  },

  updateRecord: function (component, record, updateCallback) {
    var action = component.get('c.updRecord');
    action.setParams({
      contactJson: JSON.stringify(record.updatingRecord)
    });

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === 'SUCCESS') {
        component.set('v.row', JSON.parse(response.getReturnValue()));
        updateCallback();
      }
      else if (state === 'ERROR') {
        component.find('card').refreshCard(JSON.parse(component.get('v.currentRow')));
      }
      else {
        console.log('SMTH WRONG');
      }
    });

    $A.enqueueAction(action);
  },

  updateTable: function (component, event, helper) {
    component.set('v.data', component.get('v.data'));
  },

  deleteRecord: function (component, record, deleteCallback) {
    var action = component.get('c.delRecord');
    action.setParams({
      contactJson: JSON.stringify(record.delitingRecord)
    });

    action.setCallback(this, function (response) {
      var state = response.getState();
      if (state === 'SUCCESS') {
        component.find('card').clearCard();
        console.log(response.getReturnValue());
        deleteCallback();
      } 
      else if (state === 'ERROR') {
        this.clearCard(component);
        component.get('v.currentBtn').set('v.disabled', true);
      } else {
        console.log('SMTH WRONG');
      }
    });

    $A.enqueueAction(action);
  }
})

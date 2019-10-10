({
  getData: function (component, event) {
    var action = component.get('c.getContacts');

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

  showContactDetails: function (component, row) {
    component.set('v.row', row);
  },

  clearCard: function (component, event) {
    component.find('card').clearCard();
  },

  updateRecord: function (component, record, updateCallback) {
    var action = component.get('c.updCont');
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
        var data = component.get('v.data');
        for (let row of data) {
          if (row.Id === record.Id) {
            component.set('v.row', row);
            break;
          }
        }
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
    var action = component.get('c.delCont');
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
        var data = component.get('v.data');;
        for (let row of data) {
          if (row.Id === record.Id) {
            
            break;
          }
        }
      } else {
        console.log('SMTH WRONG');
      }
    });

    $A.enqueueAction(action);
  }
})

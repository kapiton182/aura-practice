({
  updateRecord: function (component, event, helper) {
    component.updateCard(component.get('v.record'), component.get('v.recordId'));
  },

  deleteRecord: function (component, event, helper) {
    component.deleteCard(component.get('v.record'), component.get('v.recordId'));
  },

  clearCard: function (component, event, helper) {
    component.set('v.record', null);
  },

  showSpinner: function (component, event, helper) {
    component.set("v.spinner", true);
  },

  hideSpinner: function (component, event, helper) {
    component.set("v.spinner", false);
  }
})

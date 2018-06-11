({
    handleSelect : function(component, event, helper) {
        var record = component.get("v.record");
        if (record) {
            record.Status__c = event.getParam("detail").value;
            component.find("recordService").saveRecord($A.getCallback(function (saveResult) {
                console.log(component.get("v.record"));
            }));
        }
    },
    onRecordUpdated : function(component, event, helper) {
        var changeType = event.getParams().changeType;
        if (changeType === "CHANGED") {
            component.find("recordService").reloadRecord();
        } 
    }
})

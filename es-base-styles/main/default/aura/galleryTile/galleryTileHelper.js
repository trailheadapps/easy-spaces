({
    handleNotice : function(component, helper) {
        var selected = component.get("v.selected");
        if(selected){
            var action = $A.get("e.ltng:selectSObject");
            action.setParams({
                "recordId": component.get("v.recordId"),
                "channel": component.get("v.channel")
            });
            action.fire();
        }else{
            var action = component.getEvent("selectChange");
            action.setParams({
                "recordId": component.get("v.recordId"),
                "reason" : "deselect"
            });
            action.fire();
        }   
    }
})

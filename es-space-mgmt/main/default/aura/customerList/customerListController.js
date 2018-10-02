({
    onInit : function(component, event, helper) {
        var action = component.get("c.getCustomerList");
        var sobject = component.get("v.sobject");
        action.setParams({
            sObjectType : sobject
        });
        action.setCallback(this, function(response){
            component.set("v.itemsList", response.getReturnValue());
        });
        $A.enqueueAction(action);
        helper.setBadge(component, helper);
    }
})

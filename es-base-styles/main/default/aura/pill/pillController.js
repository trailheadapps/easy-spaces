({
    handleClick : function(component, event, helper) {
        var label = component.get("v.label");
        var pill = component.find("pill");
        $A.util.toggleClass(pill, "selected");
        var select = component.get("v.selected");
        component.set("v.selected", !select);
        helper.handleSelectType(component, helper);
    }
})
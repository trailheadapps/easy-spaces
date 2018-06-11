({
    handleChange : function(component, event) {
        var reason = event.getName();
        var items = component.get("v.selectedValues");
        var action = component.getEvent("selectChange");
        action.setParams({
            "selectedValues" : items,
            "reason" : reason
        });
        action.fire();
    }
})
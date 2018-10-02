({
    handleSelectType : function(component, helper) {
        var selectType = component.get("v.selected");
        if(selectType){
            //handle select
            var action = component.getEvent("select");
            action.setParams({
                "label" : component.get("v.label")
            });
            action.fire();
        }else{
            //handle deselect
            var action = component.getEvent("deselect");
            action.setParams({
                "label" : component.get("v.label")
            });
            action.fire();
        }
    }
})
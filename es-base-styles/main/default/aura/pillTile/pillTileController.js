({
    handleSelect : function(component, event, helper){
        var selectArray = component.get("v.selectedValues");
        var label = event.getParam("label");
        selectArray.push(label);
        helper.handleChange(component, event);
    },
    handleDeselect : function(component, event, helper){
        var selectArray = component.get("v.selectedValues");
        var label = event.getParam("label");
        for(var i = 0; i<selectArray.length; i++){
            if(selectArray[i] === label) selectArray.splice(i,1);
        }
        helper.handleChange(component, event);
    }
})
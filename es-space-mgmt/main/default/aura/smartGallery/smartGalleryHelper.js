({
    handleSlice : function(component, helper, spacesToEval){
        var types = component.get("v.spaceTypes");
        var removes = new Set();
        function checkType(element, index){
            spacesToEval.forEach( item => {
                var s = item.Type__c;
                if(s.indexOf(element) < 0){
                     removes.add(item.Id);
                }    
            });
        }
        types.forEach(checkType);
        helper.handleStyles(component,removes);
    },
    handleStyles: function(component, removes){
        var action = $A.get("e.c:muteTiles");
        action.setParams({
            "muteArray" : removes,
            "channel" : "smartGallery"
        });
        action.fire();
    },
    navigateFlow : function(component, helper){
        var space = component.get("v.spaceId");
        component.set("v.selectedSpace", space);
        //attribute provided by the lightning:availableForFlowScreens interface
        var navigate = component.get("v.navigateFlow");
        navigate("NEXT");
    }
})

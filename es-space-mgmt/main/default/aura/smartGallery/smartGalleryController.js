({
    onInit : function(component, event, helper) {
        var mktService = component.find("marketServiceCmp");
        var marketId = component.get("v.marketId");
        if(marketId){
            mktService.getSpaces(marketId);
        }
    },
    handleChange : function(component, event, helper){
        var selections = event.getParam("selectedValues");
        component.set("v.spaceTypes", selections);
        var spacesToEval = component.get("v.relatedSpaces");
        helper.handleSlice(component, helper, spacesToEval);
    },
    handleTileSelect : function(component, event, helper){
        var channel = event.getParam("channel");
        if(channel === "smartGallery"){
            component.set("v.spaceId", event.getParam("recordId"));
        }
    },
    handleDeselect :function(component, event, helper){
        var reason = event.getParam("reason");
        if(reason === "deselect"){
            component.set("v.spaceId", "");
        }
    }, 
    updateReservation : function(component, event, helper){
        helper.navigateFlow(component, helper);
    },
    updateAndGo : function(component, event, helper){
        component.set("v.popTabOnFinish", true);
        helper.navigateFlow(component, helper);
    },
})

({
    handleImageClick : function(component, event, helper) {
        var action = $A.get("e.force:navigateToSObject");
        action.setParams({
            "recordId": component.get("v.recordId")
        });
        action.fire();
    },
    handleSelect : function(component, event, helper){
        var selected = component.get("v.selected");
        component.set("v.selected", !selected);
        helper.handleNotice(component,helper);
    },
    checkMute : function(component, event, helper){
        var channel = event.getParam("channel");
        if(channel = "smartGallery"){
            var muteArray = event.getParam("muteArray");
            var recordId = component.get("v.recordId");
            var isMuted = component.get("v.muted");
            var tile = component.find("tile");
            if(muteArray.has(recordId) && !isMuted){
                $A.util.addClass(tile, "mute");
                component.set("v.muted", !isMuted);
            }else if( !muteArray.has(recordId) && isMuted){
                $A.util.removeClass(tile, "mute");
                component.set("v.muted", !isMuted);
            }
        }
    }
})

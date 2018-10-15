({
    handleClick : function(component, event, helper){
        var reservation = component.get("v.reservation");
        helper.sendObjectEvent(component, reservation);
        helper.sendMuteEvent(component, reservation.Id);
    },
    checkMute : function(component, event, helper){
        var channel = event.getParam("channel");
        if(channel === "spacesDesigner"){
            var recordId = component.get("v.reservation.Id");
            var mutesArray = event.getParam("muteArray");
            var isMuted = component.get("v.muted");
            var tile = component.find("tile");
            //muteArray has Id of active record
            if( !mutesArray.has(recordId) && !isMuted){
                $A.util.addClass(tile, "mute");
                component.set("v.muted", !isMuted);
            }
        }
    }
})
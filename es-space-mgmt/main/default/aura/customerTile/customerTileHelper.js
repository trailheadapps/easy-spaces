({
    sendSobjectEvent : function(recId, sobject) {
        var selectEvt = $A.get("e.ltng:selectSObject"); 
        selectEvt.setParams({
            "recordId": recId, 
            "channel": sobject 
        }); 
        selectEvt.fire(); 
    },
    sendMuteEvent : function(recId){
        var mutes = new Set();
        mutes.add(recId);
        var action = $A.get("e.c:muteTiles");
        action.setParams({
            "muteArray" : mutes,
            "channel": "reservationManager"
        });
        action.fire(); 
    }
})

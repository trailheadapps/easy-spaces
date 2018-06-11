({
    onInit : function(component, event, helper) {
        var action = component.get("c.getOpenReservations");
        action.setCallback(this, function(response){
            component.set("v.reservationList", response.getReturnValue());
        });
        $A.enqueueAction(action);
    }
})

({
    manageFlow : function(component, event, helper) {
        var channel = event.getParam("channel");
        var record = component.get("v.reservation");
        if(channel === "spaceDesigner"){
            if(! record){
                helper.startFlow(component, event, helper);
            }
        }
    },

    handleReset : function(component, event, helper){
        if(event.getParam("status") === "FINISHED"){
            console.log('flow finish detected');
            var navigationItemAPI = component.find("navigationItemAPI");
            navigationItemAPI.refreshNavigationItem().then(function(response) {
                //for illustration of the refreshNavigationItem() promise response
                //true on refresh, false if refresh blocked
                console.log('navRefresh',response);
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
})
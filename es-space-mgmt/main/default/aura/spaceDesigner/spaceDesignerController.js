({
    onInit : function(component, event, helper){
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getEnclosingTabId().then(function(tabId) {
            component.set("v.tabId", tabId);
       })
        .catch(function(error) {
            console.log(error);
        }); 
    },
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
            var workspaceAPI = component.find("workspace");
            var currentTabId = component.get("v.tabId");
            workspaceAPI.refreshTab({
                tabId: currentTabId,
                includeAllSubtabs: false
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
})
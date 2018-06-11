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
    handleSelectEvent : function(component, event, helper) {
        var channel = event.getParam("channel");
        if(channel != 'smartGallery'){
            var rec = event.getParam("recordId");
            component.set("v.recordId", rec);
            //change case of sobject string for lightning:recordForm
            if(channel === 'lead'){
                console.log("lead detected");
                component.set("v.sobjectType", "Lead");
            }else if(channel === 'contact'){
                console.log("contact detected");
                component.set("v.sobjectType", "Contact");
            }
            helper.launchFlow(component, event, helper);
        }
    },
    handleStatusChange : function(component, event, helper){
        if(event.getParam("status") === "FINISHED"){
            helper.refreshTab(component);
        }
    }
})

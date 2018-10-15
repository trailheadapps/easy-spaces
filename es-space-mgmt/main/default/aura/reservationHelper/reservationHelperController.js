({
    handleSelectEvent : function(component, event, helper) {
        var channel = event.getParam("channel");
        if(channel != 'smartGallery'){
            var rec = event.getParam("recordId");
            component.set("v.recordId", rec);
            //change case of sobject string for lightning:recordForm
            if(channel === 'lead'){
                component.set("v.sobjectType", "Lead");
            }else if(channel === 'contact'){
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

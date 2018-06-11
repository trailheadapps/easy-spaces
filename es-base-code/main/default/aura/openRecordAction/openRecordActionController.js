({
    //method name required by lightning:availableForFlowActions interface
    invoke : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        var sobject = component.get("v.sobject");
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            url: '/lightning/r/'+sobject+'/'+recordId+'/view'
        }).then(function(response) {
            workspaceAPI.focusTab({tabId : response});
       })
        .catch(function(error) {
            console.log(error);
        });

    },
})

({
    launchFlow : function(component) {
        var flow = component.find("flowCmp");
        var rec = component.get("v.recordId");
        var sobj = component.get("v.sobjectType");
        var inputVariables = [
            {name : "varRecordId" , type : "String" , value : rec},
            {name : "varSobjectType" , type : "String" , value : sobj},
        ];
        console.log('inputVariables: '+inputVariables);
        if(flow){
            flow.startFlow("Create_Reservation", inputVariables);
        } 
    },
    refreshTab : function(component){
        var workspaceAPI = component.find("workspace");
        var currentTabId = component.get("v.tabId");
        workspaceAPI.refreshTab({
            tabId: currentTabId,
            includeAllSubtabs: false
        }).catch(function(error) {
            console.log(error);
        });
    }
})

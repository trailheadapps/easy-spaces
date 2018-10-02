({
    launchFlow : function(component) {
        var flow = component.find("flowCmp");
        var rec = component.get("v.recordId");
        var sobj = component.get("v.sobjectType");
        var inputVariables = [
            {name : "varRecordId" , type : "String" , value : rec},
            {name : "varSobjectType" , type : "String" , value : sobj},
        ];
        if(flow){
            flow.startFlow("Create_Reservation", inputVariables);
        } 
    },
    refreshTab : function(component){
        var navItemAPI = component.find("navigationItemAPI");
        navItemAPI.refreshNavigationItem().then(function(response) {
            console.log('navRefresh',response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})

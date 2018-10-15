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
            //response is true or false, depending on page state
            //true on successful refresh, false if unsaved changes block refresh
            console.log('navRefresh',response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})

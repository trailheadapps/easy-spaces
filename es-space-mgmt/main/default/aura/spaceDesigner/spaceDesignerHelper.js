({
    startFlow : function(component, event, helper) {
        var record = event.getParam("object");
        component.set("v.reservation", record);
        var customer;
        if(record.Lead__c){
            customer = record.Lead__r.Name;
        }else if(record.Contact__c){
            customer = record.Contact__r.Name;
        }
        component.set("v.customer", customer);
        var flow = component.find("flowCmp");
        var inputVariables = [
            {name : "varReservId" , type : "String" , value : record.Id},
            {name : "varMarketId", type: "String", value : record.Market__c},
        ];
        if(flow){
            flow.startFlow("spaceDesigner", inputVariables);
        }
    }
})
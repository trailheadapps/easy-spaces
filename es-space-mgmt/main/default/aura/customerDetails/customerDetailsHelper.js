({
    getCustomerInfo : function(component){
        var custServ = component.find("customerServiceCmp");
        var objType = component.get("v.sobject");
        custServ.getFields(objType);
    },
    getMarkets : function(component){
        var mktService = component.find("marketServiceCmp");
        var object = component.get("v.sobject");
        var state;
        if(object === "Lead"){
            var state = component.get("v.customerRecord.State");
            mktService.getStateMarkets(state);
        } else if(object === "Contact"){
            var state = component.get("v.customerRecord.MailingState");
            mktService.getStateMarkets(state);
        } 
    }
})

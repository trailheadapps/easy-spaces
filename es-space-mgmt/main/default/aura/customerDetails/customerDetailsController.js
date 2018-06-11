({
    onInit : function(component, event, helper){
        var custServ = component.find("customerServiceCmp");
        var sobject = component.get("v.sobject");
        custServ.getFields(sobject);
    },
    loadMarkets : function(component, event, helper){
        helper.getMarkets(component);
    },
    handleMarket : function(component, event, helper){
        var selection = event.getSource().get("v.value");
        component.set("v.requestedMarket", selection);
    },
    handleSelectEvent : function(component, event, helper){
        component.set("v.fieldsArray", []);
        var channel = event.getParam("channel");
        if(channel != 'smartGallery'){
            var rec = event.getParam("recordId");
            component.set("v.recordId", rec);
            //change case of sobject string for lightning:recordForm
            if(channel === 'lead'){
                console.log("lead detected");
                component.set("v.sobject", "Lead");
            }else if(channel === 'contact'){
                console.log("contact detected");
                component.set("v.sobject", "Contact");
            }
            helper.getCustomerInfo(component);
        }
    },
    draftReservation : function(component, event, helper){
        var mkt = component.get("v.requestedMarket");
        if(!mkt){
            var markets = component.get("v.markets");
            component.set("v.requestedMarket", markets[0].Id);
        }
        //attribute provided by the lightning:availableForFlowScreens interface
        var navigate = component.get("v.navigateFlow");
        navigate("NEXT");
       
    }
})

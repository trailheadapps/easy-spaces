({
    setBadge: function(component, helper){
        //lightning:icon is case sensitive
        var sobject = component.get("v.sobject");
        if(sobject === 'Lead'){
            component.set("v.badge", 'lead');
        }else if(sobject === 'Contact'){
            component.set("v.badge", 'contact');
        }
    }
})
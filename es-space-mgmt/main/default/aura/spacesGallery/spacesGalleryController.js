({
    onInit : function(component, event, helper) {
        var mktService = component.find("marketServiceCmp");
        var recordId = component.get("v.recordId");
        if(recordId){
            console.log('marketService invocation');
            mktService.getSpaces(recordId);
        }
        console.log(component.get("v.relatedSpaces").length);
    },
    handleClick : function(component, event, helper){
        console.log('click!');
        console.log(event.getSource());
    }
})

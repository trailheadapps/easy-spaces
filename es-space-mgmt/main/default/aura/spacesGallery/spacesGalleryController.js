({
    onInit : function(component, event, helper) {
        var mktService = component.find("marketServiceCmp");
        var recordId = component.get("v.recordId");
        if(recordId){
            mktService.getSpaces(recordId);
        }
    },
    /*handleClick : function(component, event, helper){
        console.log('click!');
        console.log(event.getSource());
    }*/
})

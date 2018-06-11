#!/bin/bash

sfdx force:project:upgrade -f
sfdx muenzpraeger:source:api:set
sfdx force:org:create -a <appalias> -s -f config/project-scratch-def.json -f 7
sfdx force:source:push
#sfdx force:user:permset:assign -n <apppermset>
#sfdx force:data:tree:import --plan ./data/TheObject__c-plan.json
sfdx force:apex:test:run
sfdx force:org:open
echo "Org is set up"
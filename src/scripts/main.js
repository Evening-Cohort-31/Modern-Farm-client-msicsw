//importing the required functions
import { createPlan } from "./plan.js";
import { usePlants } from "./field.js";
import { plantSeeds } from "./tractor.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js";

// main entry point where we invoke createPlan() to get the yearly planting plan
//Core Requirement #1
const yearlyPlan = createPlan();

//console log to see the yearly plan (optional)
console.log(`The yearly plan is:\n` + yearlyPlan.join("\n"));

//Plant the seeds using function from tractor.js
//Core Requirement #4
plantSeeds(yearlyPlan);

//We can now view the plants in the field by invoking usePlants()
//the function usePlants() has a return value so it must be stored in a variable
//Core Requirement #3
const plantArray = usePlants();
//console log to see the plant objects in the field (optional)
console.log(`The plants in the field are:`);
console.log(plantArray);

//Harvest the plants using function from harvester.js
//Core Requirement #5
const harvest = harvestPlants(plantArray)
//console log to see the harvested plant objects
console.log(`The harvest is:`);
console.log(harvest);
//show harvested plant objects in a table for better viewing
console.table(harvest);

//Generate HTML <section> elements for each harvested plant
//Injects generated HTML into the <main> element inside index.html
//Core Requirement #6
//Cannot be viewed in VS Code Debugger. Must use "serve" command
Catalog(harvest)

//ready to run command "npm run test" or "npm test" in terminal
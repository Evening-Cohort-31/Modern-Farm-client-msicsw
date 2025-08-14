import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant, usePlants } from "./field.js"
import { plantSeeds} from "./tractor.js"
import { harvestPlants } from "./harvest.js";

const yearlyPlan = createPlan();
const plantsArray = plantSeeds(yearlyPlan);
console.log(plantsArray)
console.log(usePlants())
const test = harvestPlants(usePlants())
console.log(test)
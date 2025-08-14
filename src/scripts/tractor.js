import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant } from "./field.js";

/**
 * Plants the seeds according to the yearly planting plan.
 *
 * @param {Array} plantingPlan - A 2D array (array of arrays), where each sub-array represents a row in the field.
 * Each item in the row is a string representing a crop type (e.g., "Corn", "Wheat").
 *
 * This function loops through the planting plan and:
 * - Identifies the correct factory function for each plant type
 * - Creates a seed object (or an array, in the case of corn)
 * - Passes the result to the addPlant() function from field.js
 */
export const plantSeeds = (plantingPlan) => {
  const seeds = []

  for (let row of plantingPlan) {

    for (let plant of row) {
      if (plant === "Asparagus") {
        let asparagusPlant = createAsparagus(plant)
        seeds.push(asparagusPlant)
      } else if (plant === "Potato") {
        let potatoPlant = createPotato(plant)
        seeds.push(potatoPlant)
      } else if (plant === "Soybean") {
        let soybeanPlant = createSoybean(plant)
        seeds.push(soybeanPlant)
      } else if (plant === "Corn") {
        let cornPlant = createCorn(plant)
        seeds.push(cornPlant)
      } else if (plant === "Wheat") {
        let wheatPlant = createWheat(plant)
        seeds.push(wheatPlant)
      } else if (plant === "Sunflower") {
        let sunflowerPlant = createSunflower(plant)
        seeds.push(sunflowerPlant)
      }
    }
  }

  return seeds
}


console.log(createAsparagus)
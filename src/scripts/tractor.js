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
  // Outer loop: each "row" is a sub-array representing one row of crops
  for (let row of plantingPlan) {

    // Inner loop: each "plant" is a string crop type in the current row
    for (let plant of row) {

      // Each if-block checks the plant type and calls the corresponding seed factory
      // The created seed is then added to the field using addPlant()

      if (plant === "Asparagus") {
        let asparagusPlant = createAsparagus();
        addPlant(asparagusPlant);

      } else if (plant === "Potato") {
        let potatoPlant = createPotato();
        addPlant(potatoPlant);

      } else if (plant === "Soybean") {
        let soybeanPlant = createSoybean();
        addPlant(soybeanPlant);

      } else if (plant === "Corn") {
        let cornPlant = createCorn(); // Returns an array of 2 corn objects
        addPlant(cornPlant); // addPlant() handles array vs. single object

      } else if (plant === "Wheat") {
        let wheatPlant = createWheat();
        addPlant(wheatPlant);

      } else if (plant === "Sunflower") {
        let sunflowerPlant = createSunflower();
        addPlant(sunflowerPlant);
      }

    }
  }
};


/*
 * Alternative refactored version of plantSeeds() using a mapping object.
 * This version eliminates repetitive if/else statements.
 */

/*
export const plantSeeds = (plantingPlan) => {
  // Mapping of plant names to their corresponding factory functions
  const seedFactoryMap = {
    "Asparagus": createAsparagus,
    "Potato": createPotato,
    "Soybean": createSoybean,
    "Corn": createCorn,        // Corn still returns an array of two objects
    "Wheat": createWheat,
    "Sunflower": createSunflower
  };

  // Loop through each row in the planting plan
  for (let row of plantingPlan) {
    // Loop through each crop name in the row
    for (let plant of row) {
      // Get the matching factory function from the map
      const createSeed = seedFactoryMap[plant];

      // If a valid factory function exists for this plant type
      if (createSeed) {
        const seed = createSeed(); // Create the seed object (or array for Corn)
        addPlant(seed);            // Pass it to field.js to store
      }
    }
  }
};
*/

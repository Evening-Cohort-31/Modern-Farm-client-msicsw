import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant } from "./field.js";

// Define and export plantSeeds function, must accept the years plantingPlan as input, invoke the corresponding factory function, take that seed and at it to the array in field.js
export const plantSeeds = (plantingPlan) => {

  for (let row of plantingPlan) {
    for (let plant of row) {
      if (plant === "Asparagus") {
        let asparagusPlant = createAsparagus(plant);
        addPlant(asparagusPlant);
      } else if (plant === "Potato") {
        let potatoPlant = createPotato(plant);
        addPlant(potatoPlant);
      } else if (plant === "Soybean") {
        let soybeanPlant = createSoybean(plant);
        addPlant(soybeanPlant);
      } else if (plant === "Corn") {
        let cornPlant = createCorn(plant);
        addPlant(cornPlant);
      } else if (plant === "Wheat") {
        let wheatPlant = createWheat(plant);
        addPlant(wheatPlant);
      } else if (plant === "Sunflower") {
        let sunflowerPlant = createSunflower(plant);
        addPlant(sunflowerPlant);
      }
    }
  }
};

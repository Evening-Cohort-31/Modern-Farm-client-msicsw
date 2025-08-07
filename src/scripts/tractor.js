import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";

// Define and export plantSeeds function, must accept the years plantingPlan as input, invoke the corresponding factory function, take that seed and at it to the array in field.js
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
            } elseif (plant === "Sunflower") {
                let sunflowerPlant = createSunflower(plant)
                seeds.push(sunflowerPlant)
            } else 
        }
    }

    return seeds
}


console.log(createAsparagus)
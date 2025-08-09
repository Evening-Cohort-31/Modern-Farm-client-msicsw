import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant } from "./field.js";

// Define and export plantSeeds function, must accept the years plantingPlan as input, invoke the corresponding factory function, take that seed and at it to the array in field.js
export const plantSeeds = (plantingPlan) => {
    let myField = []

    for (const row of plantingPlan) {

        for (const plant of row) {
            if (plant === "Asparagus") {
                const asparagusPlant = createAsparagus()
                myField = addPlant(asparagusPlant)
            } else if (plant === "Potato") {
                const potatoPlant = createPotato()
                myField = addPlant(potatoPlant)
            } else if (plant === "Soybean") {
                const soybeanPlant = createSoybean()
                myField = addPlant(soybeanPlant)
            } else if (plant === "Corn") {
                const cornPlant = createCorn()
                myField = addPlant(cornPlant)
            } else if (plant === "Wheat") {
                const wheatPlant = createWheat()
                myField = addPlant(wheatPlant)
            } else if (plant === "Sunflower") {
                const sunflowerPlant = createSunflower()
                myField = addPlant(sunflowerPlant)
            }
        }
    }
    return myField
}


console.log(createAsparagus)
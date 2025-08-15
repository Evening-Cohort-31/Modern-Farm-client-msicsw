export const harvestPlants = (plantsArray) => {
     const harvest = [] //an empty array to hold the harvest
    for (const plant of plantsArray) {    //iterate though the plant array created in tractor.js
        if (plant.type === "Corn"){  //when the plant is Corn, we only want to harvest half of the output value
            for (let j = 0; j < (plant.output)/2; j++) {    //we will push a Corn to the harvest array half as many times as the output value on the corn object
                harvest.push(plant);
            }
        }
        else {        //if the plant isnt Corn, we will push the plant to the harvest array an equal number of times as the output value on the plant object
            for (let j = 0; j < (plant.output); j++) {
                harvest.push(plant);
            }
        }
    }
    return harvest
}
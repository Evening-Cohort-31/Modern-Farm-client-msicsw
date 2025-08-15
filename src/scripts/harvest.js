export const harvestPlants = (plantsArray) => {
     const harvest = []
    for (const plant of plantsArray) {
        if (plant.type === "Corn"){
            for (let j = 0; j < (plant.output)/2; j++) {
                harvest.push(plant);
            }
        }
        else {
            for (let j = 0; j < (plant.output)/2; j++) {
                harvest.push(plant);
            }
        }
    }
    return harvest
}
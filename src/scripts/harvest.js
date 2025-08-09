

export const harvestPlants = (plantsArray) => {
     const harvest = []
    for (const plant of plantsArray) {
        for (let j = 0; j < plant.output; j++) {
            harvest.push(plant);
        }
    }
    return harvest
}
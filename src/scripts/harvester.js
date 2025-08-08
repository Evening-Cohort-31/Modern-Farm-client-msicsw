export const harvestPlants = (plantsArray) => {
    let seedObjects = [];

    //Method where we set the counter up depending on if the plant type is "Corn" or not
    for (let plant of plantsArray) {
        const count = plant.type === "Corn" ? Math.floor(plant.output / 2) : plant.output;

        for (let i = 0; i < count; i++) {
            seedObjects.push(plant)
        }
    }


    //method setting a step size then using an incremental/traditional for loop
    // for (let plant of plantsArray) {
    //     const step = plant.type === "Corn" ? 2 : 1;

    //     for (i = 0; i < plant.output; i += step) {
    //         seedObjects.push(plant);
    //     }
    // }

    return seedObjects;
}
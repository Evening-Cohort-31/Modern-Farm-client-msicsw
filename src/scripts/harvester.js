/**
 * Processes an array of planted crops and returns a new array
 * of harvested crop objects based on each plant's "output" value.
 *
 * For each plant object in the input array:
 * - If output is 4, then 4 copies of that object are harvested.
 * - For Corn, only HALF of its output is harvested (the rest is sold to ranchers).
 *
 * @param {Array} plantsArray - Array of plant objects with `type` and `output` properties.
 * @returns {Array} seedObjects - Harvested plant objects.
 */
export const harvestPlants = (plantsArray) => {
    let seedObjects = []; // This will store the harvested crop objects

    // Loop through each plant object in the input array
    for (let plant of plantsArray) {
        let step; // Step determines how many to add based on plant type

        // Corn is a special case: we only harvest half of its output
        if (plant.type === "Corn") {
            step = 2; // Add every 2nd item → equals half the output
        } else {
            step = 1; // All other plants are fully harvested
        }

        // Use a traditional for loop to add the correct number of items
        for (let i = 0; i < plant.output; i += step) {
            seedObjects.push(plant); // Add one copy per iteration
        }
    }

    return seedObjects; // Return the full array of harvested crops
};


// This is the original method that was used to harvest plants
// Omitted function where I did Corn pushing a different way
// export const harvestPlants = (plantsArray) => {
// let seedObjects = []; // This will store the harvested crop objects

// //Method where we set the counter up depending on if the plant type is "Corn" or not
// for (let plant of plantsArray) {
//     const count = plant.type === "Corn" ? Math.floor(plant.output / 2) : plant.output;

//     for (let i = 0; i < count; i++) {
//         seedObjects.push(plant)
//     }
// }
// return seedObjects; // Return the full array of harvested crops
// };
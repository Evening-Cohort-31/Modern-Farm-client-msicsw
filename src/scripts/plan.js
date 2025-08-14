// List of available crop types that can be planted in the field.
// These are the crop names that will appear in the planting plan.
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"];

/**
 * Generates a 3x6 planting plan for the farm.
 *
 * Each row represents one section of the field (like a row of crops),
 * and each item in the row is a string representing a crop name.
 *
 * The structure of the plan is:
 * [
 *   [ "Corn", "Potato", ... ],   // Row 1
 *   [ "Wheat", "Soybean", ... ], // Row 2
 *   [ "Asparagus", "Corn", ... ] // Row 3
 * ]
 *
 * This function uses a crop generator (provided below) to select crops
 * in a rotating/randomized way and returns a complete planting plan.
 */
export const createPlan = () => {
  const plan = []; // Final output: an array of 3 arrays (rows)

  // Loop 3 times to create 3 rows
  for (let index = 0; index < 3; index++) {
    const row = []; // Temporary array to hold 6 crop types

    // Loop 6 times to add 6 crop names to the current row
    for (let j = 0; j < 6; j++) {
      row.push(crop.next().value); // Get the next crop from the generator
    }

    plan.push(row); // Add the completed row to the main plan array
  }

  return plan; // Return the full 3x6 planting plan
};

/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = (function* () {
  while (true) {
    const typeIdx = Math.floor(Math.random() * types.length);
    yield types[typeIdx];
  }
})();

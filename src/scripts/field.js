// This array stores all seed objects that are planted in the field.
// It will be updated by the addPlant() function.
// We return a copy of this array using structuredClone() instead of giving direct access.
const fieldPlants = [];

/**
 * Adds plant data to the internal fieldPlants array.
 *
 * @param {object|array} seedObject - A single plant object or an array of plant objects.
 *
 * Corn is the only seed that returns an array (two plant objects),
 * so this function handles both cases:
 * - If it's a single object, it gets pushed directly.
 * - If it's an array (like Corn), we loop through it and push each plant individually.
 */
export const addPlant = (seedObject) => {
  if (Array.isArray(seedObject)) {
    for (const seed of seedObject) {
      fieldPlants.push(seed)
    }
}
    else {
      fieldPlants.push(seedObject)
      }
      return fieldPlants
    };

/**
 * Returns a copy of the plants array (fieldPlants).
 *
 * Why use structuredClone() instead of returning the original?
 * - This protects our internal fieldPlants array from accidental changes.
 * - If we returned the original array, someone else could modify it directly,
 *   breaking the data integrity of our field module.
 * - structuredClone() gives the caller a safe, isolated copy of the data.
 *
 * This is good practice in modular code — only expose what is necessary.
 */
export const usePlants = () => {
  const duplicateFieldPlants = structuredClone (fieldPlants);
  return duplicateFieldPlants //return something
};


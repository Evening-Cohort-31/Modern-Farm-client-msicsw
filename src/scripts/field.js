const fieldPlants = [];

export const addPlant = (seedObject) => {
  if (!Array.isArray(seedObject)) {
    fieldPlants.push(seedObject);
  } else {
    for (let seed of seedObject) {
      fieldPlants.push(seed);
    }
  }
};

export const usePlants = () => {
  const duplicateFieldPlants = structuredClone(fieldPlants);
  return duplicateFieldPlants; //return something
};

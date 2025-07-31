const fieldPlants = []

export const addPlant = (seedObject) => {
    fieldPlants.push(seedObject)
};

export const usePlants = () => {
       const duplicateFieldPlants = structuredClone(fieldPlants);
       return duplicateFieldPlants //return something
}
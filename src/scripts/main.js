// ─── Import Required Functions from Modules ─────────────────────────────
import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createWheat } from "./seeds/wheat.js";
import { createSunflower } from "./seeds/sunflower.js";
import { addPlant, usePlants } from "./field.js"
import { plantSeeds } from "./tractor.js"

const yearlyPlan = createPlan();

// (Optional) Log the planting plan to the console for visibility
console.log("🌾 The yearly planting plan is:");
console.log(yearlyPlan.join("\n"));


// ─── Core Requirement #4 ────────────────────────────────────────────────
// Plant the seeds according to the plan using plantSeeds()
plantSeeds(yearlyPlan);


// ─── Core Requirement #3 ────────────────────────────────────────────────
// Retrieve all planted seeds from the field using usePlants()
// This returns a copy of the internal field array (not the original)
const plantArray = usePlants();

// (Optional) Log the planted seed objects to the console
console.log("🌱 Plants currently growing in the field:");
console.log(plantArray);


// ─── Core Requirement #5 ────────────────────────────────────────────────
// Harvest the crops using harvestPlants()
// This function calculates how many of each plant should be harvested
// based on the "output" key (and handles Corn’s special rule)
const harvest = harvestPlants(plantArray);

// (Optional) Log harvested crop objects
console.log("🧺 Harvested crop objects:");
console.log(harvest);

// Display as a table for better readability
//console.table(harvest);


// ─── Core Requirement #6 ────────────────────────────────────────────────
// Generate HTML to display harvested crops in the DOM
// This function updates the <main class="container"> element in index.html
// ⚠️ NOTE: This can’t be viewed in the debug console.
// To see the output, run your project using the "serve" command
// Prevents runtime error when running in Node.js (e.g., VS Code debugger).
// The Catalog() function accesses the DOM, which only exists in the browser.
if (typeof document !== "undefined") {
    Catalog(harvest);
}

// ─── How to Run Your Tests ──────────────────────────────────────────────
// Run the following in your terminal to verify that your modules work:
//    npm test
// This uses Jest to run the farm.test.js file and check all core features.
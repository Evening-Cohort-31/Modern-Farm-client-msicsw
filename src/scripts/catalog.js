/**
 * Generates and displays HTML for each harvested food item.
 *
 * @param {Array} harvestedFoodArray - An array of food objects, each with a `type` property.
 *
 * This function loops through each item and creates a <section> element
 * to visually represent that crop in the DOM.
 * The generated HTML is inserted into the <main class="container"> area of the page.
 */
export const Catalog = (harvestedFoodArray) => {
    let injectedHTML = ''; // String to build up all <section> elements

    // Loop through the harvested food array and create HTML for each crop
    for (let food of harvestedFoodArray) {
        injectedHTML += `<section class="plant">${food.type}</section>`;
    }

    // Insert the complete HTML into the DOM (index.html)
    // This replaces the inner contents of the container element with our crop visuals
    document.querySelector(".container").innerHTML = injectedHTML;
};
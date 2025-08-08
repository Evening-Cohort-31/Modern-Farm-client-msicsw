export const Catalog = (harvestedFoodArray) => {
    let injectedHTML = ''

    for (let food of harvestedFoodArray) {
        injectedHTML += `<section class="plant">${food.type}</section>`
    }

    document.querySelector(".container").innerHTML = injectedHTML
}
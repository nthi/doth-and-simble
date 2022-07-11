import { getCustomers } from "./database.js"
// Build a function named the same inside it that uses .filter() to generate a list of companies located in New York (NY).

// Invoke the function in the correct place in main.js to view your results on the DOM.


export const NewYorkBusinesses = () => {
    const list = getCustomers()
    let businessListHTML = ""
    list.filter(
        (city) => {
            if (city.addressStateCode === "NY") {
                businessListHTML += `
            <section class="businesses--individual">
                <h3 class="businesses--individual--title">${city.companyName}</h3>
                <section class="businesses--individual--address">
                ${city.addressFullStreet}<br>
                ${city.addressCity}, ${city.addressStateCode} ${city.addressZipCode}
                </section>
            </section>
            `
            }
        }
    )
    return businessListHTML
}

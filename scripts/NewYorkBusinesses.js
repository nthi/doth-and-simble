import { getCustomers } from "./database.js"
// Build a function named the same inside it that uses .filter() to generate a list of companies located in New York (NY).

// Invoke the function in the correct place in main.js to view your results on the DOM.

//declare and export function
export const NewYorkBusinesses = () => {
    //declare array
    const list = getCustomers()
    //declare empty html string
    let businessListHTML = ""
    //use filter method
    list.filter(
        //iterate through all obj in array to find the ones where the addressStateCode is NY
        (city) => {
            if (city.addressStateCode === "NY") 
            //add those to the html
            {
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
    ) //close the filter
    //return html string
    return businessListHTML
}

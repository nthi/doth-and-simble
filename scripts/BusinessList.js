import { getCustomers } from "./database.js";
// Your task is to use the .forEach() array method to list all of the companies so that Doris can easily browse a list of her customers. Use the example code above as a starting point. The list of companies should look like the image below.

// Build a function named the same inside it that uses .forEach() to generate an HTML representation of each business (see example image below for guidance on the structure).

// Invoke the function in the correct place in main.js to view your results on the DOM.


export const BusinessList = () => {
    const list = getCustomers()
    let businessListHTML = ""
    list.forEach(
        (businessObject) => {
            businessListHTML += `
            <section class="businesses--individual">
                <h3 class="businesses--individual--title">${businessObject.companyName}</h3>
                <section class="businesses--individual--address">
                ${businessObject.addressFullStreet}<br>
                ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}
                </section>
            </section>
            `
        }
    )
    return businessListHTML
}


// {
//     purchasingAgent: {
//         nameLast: "Torphy",
//         nameFirst: "Celia",
//       },
//       phoneWork: "(992) 079-1670 x71569",
//       orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
//       companyName: "Ran-taxon",
//       companyIndustry: "Manufacturing",
//       addressZipCode: "96673",
//       addressStateCode: "MD",
//       addressFullStreet: "7157 Hudson Street Ford",
//       addressCity: "Watrous",
//     }
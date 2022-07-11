import { getCustomers } from "./database.js"
// Build a function named the same inside it that uses .filter() to generate a list of companies in the industry of "Manufacturing".

// Invoke the function in the correct place in main.js to view your results on the DOM.


export const ManufacturingBusinesses = () => {
    const list = getCustomers()
    let businessListHTML = ""
    list.filter(
        (biz) => {
            if (biz.companyIndustry === "Manufacturing") {
                businessListHTML += `
            <section class="businesses--individual">
                <h3 class="businesses--individual--title">${biz.companyName}</h3>
                <section class="businesses--individual--address">
                ${biz.addressFullStreet}<br>
                ${biz.addressCity}, ${biz.addressStateCode} ${biz.addressZipCode}
                </section>
            </section>
            `
            }
        }
    )
    return businessListHTML
}

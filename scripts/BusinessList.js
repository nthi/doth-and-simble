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

//First do business search.
//Then refactor your code to search for purchasing agents by FIRST NAME instead. If the search text is found in the first name of any purchasing agent, show that agent.
//Then refactor to serach for purchasing agents by FIRST OR LAST NAME


document
    .querySelector("#content")
        .addEventListener(
            "keypress",
            (keyPressEvent) => {
                const companySearchResultArticle = document.querySelector(".foundBusinesses")

                if (keyPressEvent.charCode === 13) {
                   const businesses = getCustomers()
                    //13 = CR/'Enter'
                    /*
                        When the user presses 'Enter', find the matching business.


                        You can use the `.includes()` string method to
                        see if a smaller string is part of a larger string.

                        Example:
                            if (business.companyName.includes(keyPressEvent.target.value)) {

                            }
                    */

                    const foundBusiness = businesses.find(
                        // Your callback function goes here
                        (business) => {
                            if (business.companyName.toLowerCase().includes(keyPressEvent.target.value.toLowerCase())){
                                return business.companyName
                            }
                         })
                         //change everything to upper or lowercase so the match is less buggy


                    companySearchResultArticle.innerHTML = `<section>
                    <h3>${foundBusiness.companyName}</h3>
                    <section>
                    ${foundBusiness.addressFullStreet}<br>
                    ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                    </section>
                </section>`
                }
        });


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
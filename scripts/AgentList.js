import { getCustomers } from "./database.js";

// Build a function named the same inside it that uses .map() to generate an HTML representation of each purchasing agent. Display the agent's name, company, and phone number.

export const AgentList = () => {
    const list = getCustomers() //get array of all customers from database
    
    //use .map()
    const agentHTMLRepresentations = list.map(
        // Your callback function goes here
        (agent) => {
            return `
            <section><h3>${agent.purchasingAgent.nameFirst} ${agent.purchasingAgent.nameLast}</h3><h4>${agent.companyName}</h4>${agent.phoneWork}</section>
            `
            
            //this is going to give me an array of strings
         
        })
         //return agentHTMLRepresentations <don't need this because the return is in the previous step
    
    const finalHTML = agentHTMLRepresentations.join("")

    return finalHTML

}


/*
{
        purchasingAgent: {
          nameLast: "Torphy",
          nameFirst: "Celia",
        },
        phoneWork: "(992) 079-1670 x71569",
        orders: [7431.21, 5911.85, 7954.86, 7141.52, 8416.79],
        companyName: "Ran-taxon",
        companyIndustry: "Manufacturing",
        addressZipCode: "96673",
        addressStateCode: "MD",
        addressFullStreet: "7157 Hudson Street Ford",
        addressCity: "Watrous",
      }
*/
// Then use the .join("") method to concatenate all of the individual strings into a single string.

// Invoke the function in the correct place in main.js to view your results on the DOM.





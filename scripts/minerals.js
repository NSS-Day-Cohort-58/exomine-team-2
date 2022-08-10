import { getMinerals, getFacilities, getFacilityMinerals, getColonyMinerals } from "./database.js"

const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()
const colonyMinerals = getColonyMinerals()



// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "mineral") {
//             setMineral((parseInt(event.target.value)))
//         }
//     }
// )


// Define a function that takes a colony as an argument and generates a list item element for each mineral available at that colony
// Declare a variable to store the result of iterating the colonyMinerals property via the .map() method
// Check to see if the current colonyMineral object mathes the colony passed in as an argument
// If it matches, find the mineral that is associated with the current colonyMineral object and store it in a variable
// Return a list item element with that mineral's amount and name
// If the result of the .map() method is undefined, return an empty string
// Else return the result of the .map() method joined by an empty string
export const ColonyList = (colony) => {
    const listItems = colonyMinerals.map(
        (colonyMineral) => {
            if (colonyMineral.colonyId === colony.id) {
                const foundMineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
                return `<li>${colonyMineral.colonyInventory} tons of ${foundMineral.name}</li>`
            }
        }
    )
    if (listItems === undefined) {
        return ""
    } else {
        return listItems.join("")
    }
}





export const FacilityMineralsList = (facility) => {
    
    
    

    // Use .map() for converting objects to <li> elements
    const listItemsArray = facilityMinerals.map(faciMineral => {
        if(faciMineral.facilityId === facility.id){
        const foundMineral = minerals.find(mineral => mineral.id === faciMineral.mineralId)
              return `<input type="radio" name="facility--mineral" value="${faciMineral.id}" /> ${faciMineral.facilityInventory} tons of ${foundMineral.name}`
         
            }     
        })


        // Join all of the strings in the array into a single string
   return listItemsArray.join("")
    }



   
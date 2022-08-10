import { getMinerals, getFacilities, getFacilityMinerals } from "./database.js"


const minerals = getMinerals()
const facilityMinerals = getFacilityMinerals()




document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral((parseInt(event.target.value)))
        }
    }
)


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

   








import { getFacilities, getFacilityMinerals, getMinerals, purchaseMineral, setFacilityMineral, setMineral } from "./database.js"

const facilityMinerals = getFacilityMinerals()
const minerals = getMinerals()
const facilities = getFacilities()

export const CartSelection = () => {
    return `<p id="cart--selection"></p>`
}

// Create an event listener of type “change” for the facility mineral radio buttons
// If a mineral radio button is selected (check for name attribute since it’s a radio button)
// Find which facilityMineral was selected and store that object in a variable
// Pass that object into the
// Find which facility is associated with that facilityMineral object
// Find which mineral is associated with that facilityMineral object
// Update the innerHTML of the paragraph element within the Space Cart article to display that 1 ton of that mineral from that facility has been selected
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility--mineral") {
            const foundFacilityMineral = facilityMinerals.find(facilityMineral => facilityMineral.id === parseInt(event.target.value))
            const foundMineral = minerals.find(mineral => mineral.id === foundFacilityMineral.mineralId)
            const foundFacility = facilities.find(facility => facility.id === foundFacilityMineral.facilityId)

            document.getElementById("cart--selection").innerHTML = `1 ton of ${foundMineral.name} from ${foundFacility.name}`
            setMineral(foundMineral.id)
            setFacilityMineral(foundFacilityMineral.id)
        }
    }
)

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "purchaseButton") {
            purchaseMineral()
        }
    }
)



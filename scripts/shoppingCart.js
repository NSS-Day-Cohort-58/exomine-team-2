import { getCartBuilder, getFacilities, getFacilityMinerals, getMinerals, purchaseMineral } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()


// Find a place for this update `1 ton of ${foundMineral.name} from ${foundFacility.name}`
export const CartSelection = () => {
    const facilityMinerals = getFacilityMinerals()
    const cartBuilder = getCartBuilder()
    const cartChoices = []

    let html = `<ul id="cart--selection">`
    const foundFacilityMineral = facilityMinerals.find(facilityMineral => facilityMineral.id === cartBuilder.facilityMineralId)

    if (foundFacilityMineral) {
        const foundMineral = minerals.find(mineral => mineral.id === foundFacilityMineral.mineralId)
        const foundFacility = facilities.find(facility => facility.id === foundFacilityMineral.facilityId)

        // Might not need this double-check
        if (foundMineral.id === cartBuilder.mineralId) {
            cartChoices.push(`<li>1 ton of ${foundMineral.name} from ${foundFacility.name}</li>`)
        }
    }
    html += cartChocies.join("")
    html += `</ul>`
    return html
}


// Purchase Button event listener
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "purchaseButton") {
            purchaseMineral()
        }
    }
)



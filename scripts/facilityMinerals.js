import { getCartBuilder, getFacilityMinerals, getMinerals, setMineral, setFacilityMineral, getFacilities } from "./database.js"

const minerals = getMinerals()
const facilities = getFacilities()

// Find a place for this update `Facility Minerals for ${foundFacility.name}`

export const FacilityMinerals = () => {

    const facilityMinerals = getFacilityMinerals()
    const cartBuilder = getCartBuilder()

    let facilityHeader = "Facility Minerals"
    if (cartBuilder.facilityId) {
        const foundFacility = facilities.find(facility => facility.id === cartBuilder.facilityId)
        facilityHeader += ` for ${foundFacility.name}`
    }

    let html = `<h2 id="facility--header">${facilityHeader}</h2>
        <ul id="facility--minerals">`
    const listItemsArray = facilityMinerals.map(facilityMineral => {
        if (facilityMineral.facilityId === cartBuilder.facilityId) {

            const foundMineral = minerals.find(mineral => mineral.id === facilityMineral.mineralId)
            const shouldIBeChecked = facilityMineral.id === cartBuilder.facilityMineralId

            const foundFacility = facilities.find(facility => facility.id === facilityMineral.facilityId)
            const shouldIBeActive = foundFacility.status

            return `<input type="radio" name="facility--mineral" value="${facilityMineral.id}--${facilityMineral.mineralId}" ${shouldIBeChecked ? "checked" : ""} ${shouldIBeActive ? "" : "disabled"}/> ${facilityMineral.facilityInventory} tons of ${foundMineral.name}`
        } else {
            return ""
        }
    })
    html += listItemsArray.join("")
    html += `</ul>`
    return html
}

// CLEAN UP EVENT LISTENER
// Any HTML related code needs to be in the shopping cart function now,  not the event listener
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility--mineral") {
            const [facilityMineralId, mineralId] = event.target.value.split("--")
            setMineral(parseInt(mineralId))
            setFacilityMineral(parseInt(facilityMineralId))
        }
    }
)




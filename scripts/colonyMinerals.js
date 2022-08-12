import { getColonies, getCartBuilder, getColonyMinerals, getMinerals } from "./database.js"

const colonies = getColonies()
const minerals = getMinerals()

// -----NEED TO MERGE THESE TWO FUNCTIONS
// Find a spot for this update `${foundColony.name} Minerals`

// Define and export a function that creates the header and unordered list html for the colony minerals
export const ColonyMinerals = () => {
    const cartBuilder = getCartBuilder()
    const colonyMinerals = getColonyMinerals()

    let colonyHeader = "Colony Minerals"
    if (cartBuilder.colonyId) {
        const foundColony = colonies.find(colony => colony.id === cartBuilder.colonyId)
        colonyHeader = `${foundColony.name} Minerals`
    }


    let html = `<h2 id="colony--header">${colonyHeader}</h2>
    <ul id="colony--minerals"></ul>`

    const listItems = colonyMinerals.map(
        (colonyMineral) => {
            if (colonyMineral.colonyId === cartBuilder.colonyId) {
                const foundMineral = minerals.find(mineral => mineral.id === colonyMineral.mineralId)
                return `<li>${colonyMineral.colonyInventory} tons of ${foundMineral.name}</li>`
            } else {
                return ""
            }
        }
    )
    html += listItems.join("")
    html += `</ul>`
    return html
}

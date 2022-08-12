const database = {
    colonies: [
        { id: 1, name: "Europa" },
        { id: 2, name: "Earth" },
        { id: 3, name: "Mars" },
        { id: 4, name: "Pluto" },
    ],
    governors: [
        { id: 1, name: "Patricia Purdy", colonyId: 4, status: true },
        { id: 2, name: "Katrina Bahringer", colonyId: 1, status: true },
        { id: 3, name: "Lola Wolff", colonyId: 2, status: true },
        { id: 4, name: "Damaon Hartmonn", colonyId: 3, status: true },
    ],
    facilities: [
        { id: 1, name: "Ganymede", status: true },
        { id: 2, name: "Lo", status: true },
        { id: 3, name: "Titan", status: true },
    ],
    minerals: [
        { id: 1, name: "Gold" },
        { id: 2, name: "Salt" },
        { id: 3, name: "Iron" },
        { id: 4, name: "Nickel" },
        { id: 5, name: "Chromium" },
    ],

    facilityMinerals: [
        { id: 1, facilityId: 1, mineralId: 1, facilityInventory: 80 },
        { id: 2, facilityId: 1, mineralId: 3, facilityInventory: 69 },
        { id: 3, facilityId: 2, mineralId: 2, facilityInventory: 56 },
        { id: 4, facilityId: 2, mineralId: 4, facilityInventory: 160 },
        { id: 5, facilityId: 2, mineralId: 5, facilityInventory: 37 },
        { id: 6, facilityId: 3, mineralId: 1, facilityInventory: 420 },
    ],
    colonyMinerals: [
        { id: 1, governorId: 3, colonyId: 2, mineralId: 3, colonyInventory: 7 },
        { id: 2, governorId: 3, colonyId: 2, mineralId: 5, colonyInventory: 2 }
    ],
    cartBuilder: {}
}




export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({ ...facilityMineral }))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({ ...colonyMineral }))
}
export const getCartBuilder = () => {
    return { ...database.cartBuilder }
}




export const setFacility = (id) => {
    database.cartBuilder.facilityId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setColony = (id) => {
    database.cartBuilder.colonyId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernor = (id) => {
    database.cartBuilder.governorId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setMineral = (id) => {
    database.cartBuilder.mineralId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setFacilityMineral = (id) => {
    database.cartBuilder.facilityMineralId = id
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

// Haven't used this one yet
export const setColonyInventory = (inventory) => {
    database.cartBuilder.colonyInventory = inventory
    document.dispatchEvent(new CustomEvent("stateChanged"))
}




// CLEAN UP THIS FUNCTION, but this is last step

export const purchaseMineral = () => {
    const cartBuilder = getCartBuilder()

    const newColonyMineral = { ...database.cartBuilder }

    if (database.colonyMinerals.length === 0) {
        newColonyMineral.id = 1
    } else {
        const lastIndex = database.colonyMinerals.length - 1
        newColonyMineral.id = database.colonyMinerals[lastIndex].id + 1
    }

    const facilityMinerals = getFacilityMinerals()
    const foundFacilityMineral = facilityMinerals.find(facilityMineral => facilityMineral.mineralId === cartBuilder.facilityMineralId)
    const subtractInventory = foundFacilityMineral.facilityInventory - 1
    foundFacilityMineral[foundFacilityMineral.id - 1].facilityInventory = subtractInventory
    delete database.cartBuilder.facilityMineralId


    // If it doesn't update, try referencing the database object directly instead of found variable
    const colonyMinerals = getColonyMinerals()
    const foundColonyMineral = colonyMinerals.find(colonyMineral => colonyMineral.mineralId === cartBuilder.mineralId && colonyMineral.colonyId === cartBuilder.colonyId)
    if (foundColonyMineral) {
        const addInventory = foundColonyMineral.colonyInventory + 1
        foundColonyMineral[foundColonyMineral.id - 1].colonyInventory = addInventory
    } else {
        const newPurchase = {
            id: newColonyMineral.id,
            colonyId: newColonyMineral.colonyId,
            mineralId: newColonyMineral.mineralId,
            colonyInventory: 1
        }
        database.colonyMinerals.push(newPurchase)
    }


    // database.cartBuilder.mineralId = ""
    // // database.cartBuilder.facilityMineralId = ""

    document.dispatchEvent(new CustomEvent("stateChanged"))
}
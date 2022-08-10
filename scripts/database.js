const database = {
    colonies: [
        {id:1, name:"Europa"},
        {id:2, name:"Earth"},
        {id:3, name:"Mars"},
        {id:4, name:"Pluto"},
    ],
    governors: [
        {id:1 , name: "Patricia Purdy", colonyId:4, status: true },
        {id:2 , name: "Katrina Bahringer", colonyId:1, status: true },
        {id:3 , name:"Lola Wolff", colonyId:2, status: true},
        {id:4 , name:"Damaon Hartmonn", colonyId:3, status: true},
    ],
    facilities: [
        {id:1 , name: "Ganymede", status: true },
        {id:2 , name: "Lo", status: false},
        {id:3 , name: "Titan", status: true},
    ],
    minerals: [
        {id:1 , name:"Gold" },
        {id:2 , name:"Salt" },
        {id:3 , name:"Iron" },
        {id:4 , name:"Nickel" },
        {id:5 , name:"Chromium" },
    ],
    
    facilityMinerals: [
        {id:1 , facilityId: 1, mineralId: 1, facilityInventory: 80 },
        {id:2 , facilityId: 1, mineralId: 3, facilityInventory: 69 },
        {id:3 , facilityId: 2, mineralId: 2, facilityInventory: 56 },
        {id:4 , facilityId: 2, mineralId: 4, facilityInventory: 160},
        {id:5 , facilityId: 2, mineralId: 5, facilityInventory: 37},
        {id:6 , facilityId: 3, mineralId: 1, facilityInventory: 420},
    ],
    colonyMinerals: [
        {id: 1, governorId: 3, colonyId: 2, mineralId: 3, colonyInventory: 7},
        {id: 1, governorId: 3, colonyId: 2, mineralId: 5, colonyInventory: 2}
    ],
    cartBuilder: {}
}




export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}






export const setFacility = (facilityId) => {
    database.cartBuilder.selectedFacility = facilityId
    //document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setColony = (colonyId) => {
    database.cartBuilder.selectedcolony = colonyId
}
export const setGovernor = (governorId) => {
    database.cartBuilder.selectedgovernor = governorId
}
export const setMineral = (mineralId) => {
    database.cartBuilder.selectedmineral = mineralId
}
export const setFacilityMineral = (facilityMineralId) => {
    database.cartBuilder.selectedfacilityMineral = facilityMineralId
}
export const setColonyMineral = (colonyInventory) => {
    database.cartBuilder.colonyInventory = colonyInventory
}




// Broadcast custom event to entire documement so that the
// application can re-render and update state


export const purchaseMineral = () => {


    const newColonyMineral = {...database.cartBuilder}

    if (database.colonyMinerals.length === 0) {
        newColonyMineral.id = 0
    } else {
        const lastIndex = database.colonyMinerals.length - 1
        newColonyMineral.id = database.colonyMinerals[lastIndex].id + 1
        }
    const colonyMinerals = getColonyMinerals()
    let updatedInventory 
    const foundColonyMineral = colonyMinerals.find(colonyMineral => colonyMineral.colonyId === database.cartBuilder.selectedcolony && colonyMineral.mineralId === database.cartBuilder.selectedmineral)
    if (foundColonyMineral === undefined) {
       updatedInventory = 1 
    }
    else {
        updatedInventory = foundColonyMineral.colonyInventory + 1
    }
    setColonyMineral(updatedInventory)
    


    database.colonyMinerals.push(newColonyMineral)

    database.cartBuilder = {}


    document.dispatchEvent( new CustomEvent("stateChanged") )
}

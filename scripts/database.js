

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
        {id:2 , name: "Lo", status: true},
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
        {id: 2, governorId: 3, colonyId: 2, mineralId: 5, colonyInventory: 2}
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




export const setFacility = (id) => {
    database.cartBuilder.facilityId = id
    //document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setColony = (id) => {
    database.cartBuilder.colonyId = id
    //document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setGovernor = (id) => {
    database.cartBuilder.governorId = id
    //document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setMineral = (id) => {
    database.cartBuilder.mineralId = id
    //document.dispatchEvent( new CustomEvent("stateChanged") )

}
export const setFacilityMineral = (id) => {
    database.cartBuilder.facilityMineralId = id
    //document.dispatchEvent( new CustomEvent("stateChanged") )
}
export const setColonyInventory = (inventory) => {
    database.cartBuilder.colonyInventory = inventory
    //document.dispatchEvent( new CustomEvent("stateChanged") )
}







export const purchaseMineral = () => {


    //const newColonyMineral = {...database.cartBuilder}

    if (database.colonyMinerals.length === 0) {
        database.cartBuilder.id = 1
    } else {
        const lastIndex = database.colonyMinerals.length - 1
        database.cartBuilder.id = database.colonyMinerals[lastIndex].id + 1
    }
// for our setter functions in our caert builder we have a governor, a colony, a facility, a mineral, and a facility mineral.
//we still need colony inventory 
//all we want at the end is colony, mineral, and colony inventory when we push based on erd
//when purchacing a mineral we need to subtract one from facility inventory

const facilityMinerals = getFacilityMinerals()

    
    const foundFacilityMineral = facilityMinerals.find(facilityMineral => facilityMineral.mineralId === database.cartBuilder.facilityMineralId)
        const subtractInventory = foundFacilityMineral.facilityInventory - 1
            database.facilityMinerals[foundFacilityMineral.id - 1].facilityInventory = subtractInventory
                //delete database.cartBuilder.facilityMineralId


const colonyMinerals = getColonyMinerals()    
    const foundColonyMineral = colonyMinerals.find(colonyMineral => colonyMineral.mineralId === database.cartBuilder.mineralId && colonyMineral.colonyId === database.cartBuilder.colonyId )
//if a colony mineral match is found it will be truthy update the inventory on the existing object
// if a colony mineral is not found set the inventory to 1 and push new colony mineral object into array    
        if(foundColonyMineral){
            const addInventory = foundColonyMineral.colonyInventory + 1
            database.colonyMinerals[foundColonyMineral.id - 1].colonyInventory = addInventory 
        }else{
            setColonyInventory(1)
            database.colonyMinerals.push(database.cartBuilder)
        }
        

   
    


    database.cartBuilder = {}

// Broadcast custom event to entire documement so that the
// application can re-render and update state
    document.dispatchEvent( new CustomEvent("stateChanged") )
}











//     const colonyMinerals = getColonyMinerals()
    // let updatedInventory 
    // const foundColonyMineral = colonyMinerals.find(colonyMineral => colonyMineral.colonyId === database.cartBuilder.selectedcolony && colonyMineral.mineralId === database.cartBuilder.selectedmineral)
    // if (foundColonyMineral === undefined) {
    //    updatedInventory = 1 
    // }
    // else {
    //     updatedInventory = foundColonyMineral.colonyInventory + 1
    // }
    // setColonyMineral(updatedInventory)


 
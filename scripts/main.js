import { Exomine } from "./exomine.js"
import { ColonyList, FacilityMineralsList } from "./minerals.js"
import { getFacilities, getColonies } from "./database.js"

const colonies = getColonies()
const facilities = getFacilities()

// Finds the element within the document with id of "container" and sets that element's innerHTML equal to the return value of the Exomine function
const renderAllHTML = () => {
    document.querySelector("#container").innerHTML = Exomine()
}

// Call the function above to render all of the main HTML at least once
renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")

    const governorAttribute = document.getElementById("options--governor").getAttribute("currentcolony")
    const selectedColony = colonies.find(colony => colony.id === parseInt(governorAttribute))
    document.getElementById("colony--minerals").innerHTML = ColonyList(selectedColony)
    
    const facilityAttribute = document.getElementById("options--facility").getAttribute("currentfacility")
    const selectedFacility = facilities.find(facility => facility.id === parseInt(facilityAttribute))
    document.getElementById("facility--minerals").innerHTML = FacilityMineralsList(selectedFacility)

})
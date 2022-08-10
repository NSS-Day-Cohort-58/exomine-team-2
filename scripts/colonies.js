import { getColonies, getGovernors, setColony, setGovernor } from "./database.js"
import { ColonyList } from "./minerals.js"


const colonies = getColonies()
const governors = getGovernors()

// Define and export a function that creates the header and unordered list html for the colony minerals
export const ColonyMinerals = () => {
    return `<h2 id="colony--header"> Colony Minerals</h2>
    <ul id="colony--minerals"></ul>`
}

// Create an event listener of type "change" that listens for when a governor is selected
// If the event target has an id of "options--governor"
// Use the .find() method to find which governor was selected and store that governor object in a variable
// Use the .find() method to find which colony that governor is associated with and store that colony object in a variable
// Update the inner HTML of the colony header to include that colony's name
// Update the inner HTML of the unordered list to display the amount of each mineral avaialble at that colony

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "options--governor") {
            const foundGovernor = governors.find(governor => governor.id === parseInt(event.target.value))
            const foundColony = colonies.find(colony => colony.id === foundGovernor.colonyId)
            document.getElementById("colony--header").innerHTML = `${foundColony.name} Minerals`
            document.getElementById("colony--minerals").innerHTML = ColonyList(foundColony)
            setColony(foundColony.id)
            setGovernor(foundGovernor.id)
        }
    }
)
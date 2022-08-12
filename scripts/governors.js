import { getGovernors, getCartBuilder, setGovernor, setColony } from "./database.js"

const governors = getGovernors()

// Define and export a function that generates the html for a drop-down list of governors
// Add a label element for the description
// If the governor is active
// Add an option element for each governor with id equal to governor id and value equal to governor id and colony id
export const Governors = () => {
    const cartBuilder = getCartBuilder()

    let html = `<label for="options--governor">Choose a Governor</label>
    <select id="options--governor">
    <option id="option--0" value="0">Select Governor...</option>`

    const listItems = governors.map(governor => {

        if (governor.status === true) {
            html += `<option id="option--${governor.id}" value ="${governor.id}--${governor.colonyId}" ${governor.id === cartBuilder.governorId ? "selected" : ""}>${governor.name}</option>`
        }
    })
    html += listItems.join("")
    html += "</select>"
    return html
}


// Create an event listener of type "change" that sets the state for colony and governor when a governor is selected
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "options--governor") {
            const [governorId, colonyId] = event.target.value.split("--")
            setGovernor(parseInt(governorId))
            setColony(parseInt(colonyId))
        }
    }
)
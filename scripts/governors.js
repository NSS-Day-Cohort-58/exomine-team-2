import { getGovernors, getCartBuilder, setGovernor, setColony } from "./database.js"

const governors = getGovernors()


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
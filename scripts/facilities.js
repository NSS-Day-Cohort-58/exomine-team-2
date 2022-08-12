import { getFacilities, setFacility, getCartBuilder } from "./database.js"

const facilities = getFacilities()


// Define and export a function to create the drop-down list html
// Diable facility drop down until a governor is selected
    // If cartBuilder has a governorId, return empty string, but if it does not have a governorId, add the disable attribute to the select element (This is a condensed if-else statement)
// It's a dynamic way to render a certain version of the html based on the transient state
// Use the .map() method to add an option element of the facility name with a value equal to facility id for each facility object
// Return the html

export const Facilities = () => {
    const cartBuilder = getCartBuilder()

    let html = `<label for="options--facility">Choose a Facility</label>
    <select id="options--facility" ${cartBuilder.governorId ? "" : "disabled"}>
    <option id="option--0" value="0">Select Facility...</option>`

    const optionTags = facilities.map(facility => {
        html += `<option id="option--${facility.id}" value="${facility.id}" ${facility.id === cartBuilder.facilityId ? "selected" : ""}>${facility.name}</option>`
    })
    html += optionTags.join("")
    html += "</select>"

    return html
}

// Define a function to disable the pruchase button if the current selected facility is inactive
// We're keeping this here because all of its information is about facilities even though is affects the shopping cart button
const ButtonDisabled = () => {
    const cartBuilder = getCartBuilder()

    if (cartBuilder.facilityId) {
        const foundFacility = facilities.find(facility => facility.id === cartBuilder.facilityId)
        if (foundFacility.status === false) {
            document.getElementById("purchaseButton").disabled = true
        }
    }
}


// Create an event listener of type "change" that sets the state for facility when a facility is selected\
// Disable the purchase button if the selected facility is inactive
document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "options--facility") {
            setFacility(parseInt(event.target.value))
            ButtonDisabled()
        }
    }
)


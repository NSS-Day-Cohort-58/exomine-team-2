import { getFacilities, setFacility, getCartBuilder } from "./database.js"

const facilities = getFacilities()


// Define and export a function to create the drop-down list html
// Declare a variable to store the html whose value is a select element with id of "facility"
// Add an option element with value equal to 0 for Select Facility
// Use the .map() method t, add an option element of the facility name with a value equal to facility id for each facility object within the facilities array
// Join the array of option elements and add it to the html
// Return the html

// Line 20 - If cartBuilder has a governorId, return empty string, but if it does not have a governorId, add the disable attribute to the select element (This is a condensed if-else statement)
// It's a dynamic way to render a certain version of the html based on the transient state

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


// CLEAN UP EVENT LISTENER TO BE ONLY SETTER FUNCTIONS (use governor example) + DISABLE FEATURE

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "options--facility") {
            setFacility(parseInt(event.target.value))
            ButtonDisabled()
        }
    }
)


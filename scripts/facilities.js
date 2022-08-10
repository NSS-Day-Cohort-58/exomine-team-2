import { getFacilities } from "./database.js"
import { Governors } from "./governors.js"

const facilities = getFacilities()

// Define and export a function to create the drop-down list html
// Declare a variable to store the html whose value is a select element with id of "facility"
// Add an option element with value equal to 0 for Select Facility
// Use the .map() method t, add an option element of the facility name with a value equal to facility id for each facility object within the facilities array
// Join the array of option elements and add it to the html
// Return the html
export const Facilities = () => {
    let html = `<label for="options--facility">Choose a Facility</label>
    <select id="options--facility">
    <option id="option--0" value="0">Select Facility...</option>`

    const optionTags = facilities.map(facility => {
        html += `<option id="option--${facility.id}" value="${facility.id}">${facility.name}</option>`
    })
    html += optionTags.join("")
    html += "</select>"
    // if (document.getElementById("governor").parseInt(value) === 0) {
    //     document.getElementById("facility").disabled = true
    // }
    return html
}



export const FacilityMinerals = () => {
    return `
    <h2 id="facility--header">Facility Minerals</h2>
    <ul id="facility--minerals">
    </ul>
    `
}

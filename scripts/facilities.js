import { getFacilities } from "./database.js"
import { Governors } from "./governors.js"
import { FacilityMineralsList } from "./minerals.js";

const facilities = getFacilities()
export const FacilityMinerals = () => {
    return `
    <h2 id="facility--header">Facility Minerals</h2>
    <ul id="facility--minerals">
    </ul>
    `
}
// Define and export a function to create the drop-down list html
// Declare a variable to store the html whose value is a select element with id of "facility"
// Add an option element with value equal to 0 for Select Facility
// Use the .map() method t, add an option element of the facility name with a value equal to facility id for each facility object within the facilities array
// Join the array of option elements and add it to the html
// Return the html
export const Facilities = () => {
    let html = `<label for="options--facility">Choose a Facility</label>
    <select id="options--facility" disabled=true>
    <option id="option--0" value="0">Select Facility...</option>`

    const optionTags = facilities.map(facility => {
        html += `<option id="option--${facility.id}" value="${facility.id}">${facility.name}</option>`
    })
    html += optionTags.join("")
    html += "</select>"
    return html
}

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "options--governor") {
            document.getElementById("options--facility").disabled = false
        }
    }
)




document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "options--facility") {
            const foundFacility = facilities.find(facility => {
                if(facility.id === parseInt(event.target.value)){
                    return facility
                }
            })
            
            document.getElementById("facility--header").innerHTML = `Facility Minerals for ${foundFacility.name}`
            document.getElementById("facility--minerals").innerHTML = FacilityMineralsList(foundFacility)
            if(foundFacility.status === false ){
                document.getElementById("purchaseButton").disabled = true
            }
        }
    }
)
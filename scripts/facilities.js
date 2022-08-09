import { getFacilities } from "./database.js"


const facilities = getFacilities()



export const Facilities = () => {
    let html = `<select id="facility">
    <option value="0">Select Facility...</option>`

    const listItems = facilities.map(facility => {
        html += 
    })
    html += listItems.join("")
    html += "</select>"
}

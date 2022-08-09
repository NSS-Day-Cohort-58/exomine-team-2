import { getFacilities } from "./database.js"


const facilities = getFacilities()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility((parseInt(event.target.value)))
        }
    }
)





export const Facilities = () => {
    let html = `<select id="facility">
    <option value="0">Select Facility...</option>`

    const listItems = facilities.map(facility => {
        html += 
    })
    html += listItems.join("")
    html += "</select>"
}
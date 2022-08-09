import { getMinerals } from "./database.js"


const minerals = getMinerals()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "mineral") {
            setMineral((parseInt(event.target.value)))
        }
    }
)





export const Minerals = () => {
    let html = `<select id="mineral">
    <option value="0">Select Mineral...</option>`

    const listItems = minerals.map(mineral => {
        html += 
    })
    html += listItems.join("")
    html += "</select>"
}
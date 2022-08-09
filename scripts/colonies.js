import { getColonies } from "./database.js"


const colonies = getColonies()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "colony") {
            setColony((parseInt(event.target.value)))
        }
    }
)





export const Colonies = () => {
    let html = `<select id="colony">
    <option value="0">Select Colony...</option>`

    const listItems = colonies.map(colony => {
        html += 
    })
    html += listItems.join("")
    html += "</select>"
}
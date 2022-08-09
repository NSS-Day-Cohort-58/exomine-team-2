import { getGovernors } from "./database.js"


const governors = getGovernors()



document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            setGovernor((parseInt(event.target.value)))
        }
    }
)





export const Governors = () => {
    let html = `<select id="governor">
    <option value="0">Select Governor...</option>`

    const listItems = governors.map(governor => {
        html += 
    })
    html += listItems.join("")
    html += "</select>"
}
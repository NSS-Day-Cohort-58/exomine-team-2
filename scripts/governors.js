import { getGovernors } from "./database.js"


const governors = getGovernors()



// document.addEventListener(
//     "change",
//     (event) => {
//         if (event.target.name === "governor") {
//             setGovernor((parseInt(event.target.value)))
//         }
//     }
// )





export const Governors = () => {
    let html = `<label for="options--governor">Choose a Governor</label>
    <select id="options--governor">
    <option id="option--0" value="0">Select Governor...</option>`

    const listItems = governors.map(governor => {
        if (governor.status === true) {
            html += `<option id="option--${governor.id}" value ="${governor.id}" selected = ">${governor.name}</option>`
        }
    })
    html += listItems.join("")
    html += "</select>"
    return html
}

import { Exomine } from "./exomine.js"

//Finds the element within the document with id of "container" and sets that element's innerHTML equal to the return value of the Exomine function
const renderAllHTML = () => {
    document.querySelector("#container").innerHTML = Exomine()
}

// Call the function above to render all of the main HTML at least once
renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
import { Exomine } from "./exomine.js"

// Finds the element within the document with id of "container" and sets that element's innerHTML equal to the return value of the Exomine function
const renderAllHTML = () => {
    document.querySelector("#container").innerHTML = cars_R_us()
}

// Call the function above to render all of the main HTML at least once
renderAllHTML()
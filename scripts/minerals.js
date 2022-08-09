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

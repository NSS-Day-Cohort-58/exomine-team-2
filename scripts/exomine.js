import { Governors } from "./governors.js"
import { Facilities } from "./facilities.js"
import { ColonyMinerals } from "./colonies.js"

export const Exomine = () => {
    return `<h1>Solar System Mining Marketplace</h1>
    
    <article id="options">
        ${Governors()}
        ${Facilities()}
    </article>
    <article id="colony">
        ${ColonyMinerals()}
    </article>
    <article id="facility">
        
    </article>
    <article id="cart">
        <h2>Space Cart</h2>
        
        <button id="purchaseButton">Purchase Mineral</button>
    </article>
    `
}
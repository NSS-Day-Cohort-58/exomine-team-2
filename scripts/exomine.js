import { Governors } from "./governors.js"
import { Facilities } from "./facilities.js"
import { ColonyMinerals } from "./colonyMinerals.js"
import { CartSelection } from "./shoppingCart.js"
import { FacilityMinerals } from "./facilityMinerals.js"

export const Exomine = () => {
    return `<h1>Solar System Mining Marketplace</h1>
    <section id="fullSystem">
    <article id="options">
        ${Governors()}
        ${Facilities()}
    </article>
    <article id="colony">
        ${ColonyMinerals()}
    </article>
    <article id="facility">
        ${FacilityMinerals()}
    </article>
    <article id="cart">
        <h2>Space Cart</h2>
        ${CartSelection()}
        <button id="purchaseButton">Purchase Mineral</button>
    </article>
    </section>
    `
}
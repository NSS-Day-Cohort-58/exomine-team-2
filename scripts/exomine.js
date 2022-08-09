import { Governors } from "./governors.js"
import { Facilities } from "./facilities.js"
import { ColonyMinerals } from "./colonyMinerals.js"
import { FacilityMinerals, cartBuilder } from "./facilityMinerals.js"

export const Exomine = () => {
    return `<h1>Solar System Mining Marketplace</h1>
    <article id="options">
        ${Governors}
        ${Facilities}
    </article>
    <article id="colonyMinerals">
        ${ColonyMinerals}
    </article>
    <article id="facilityMinerals">
        ${FacilityMinerals}
    </article>
    <article id="cartBuilder">
        <h2>Space Cart</h2>
        ${cartBuilder}
        <button id="purchaseButton">Purchase Mineral</button>
    </article>
    `
}
import { Cart } from "../components/Cart.js";
import { CheckoutCard } from "../components/CheckoutCard.js";


export function CartPage(cart){
    return `${Cart(cart)}
            ${CheckoutCard(calculTotal(cart))}`
}

function calculTotal(games){
    let total = 0
    for (const game of games){
        total += game.price
    }

    return total.toFixed(2)
}


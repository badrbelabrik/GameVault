import { Cart } from "../components/Cart.js";
import { CheckoutCard } from "../components/CheckoutCard.js";

export function CartPage(){
    return `${Cart()}
            ${CheckoutCard()}`
}
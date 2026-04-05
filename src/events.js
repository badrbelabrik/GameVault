import { setAppState, setCategory, setSearch, addToCart, deleteFromCart, changeQuantity,ClearCart,showMessage } from "./main.js"
const root = document.getElementById("root")
let eventsInitialized = false
export function events() {

    if (eventsInitialized) return;
    eventsInitialized = true;


    root.addEventListener("click", (e) => {
        const el = e.target
        const btn = el.closest("[data-category]");
        if (btn) {
            e.preventDefault()
            const searchBar = document.getElementById("search-bar")
            searchBar.value = ""
            setSearch("")
            setCategory(btn.dataset.category)
        }

        if (el.closest(".add-to-cart")) {
            e.preventDefault()
            const gameId = el.closest(".game-card").dataset.id
            addToCart(gameId)
        }

        if (el.closest(".go-home")) {
            setAppState("home")
        }

        if (el.closest(".go-cart")) {
            setAppState("cart")
        }

        if (el.closest(".delete-from-cart")) {
            const gameId = el.closest(".game-column").dataset.id
            deleteFromCart(gameId)
        }

        if(el.closest(".purchase")){
            ClearCart()
        }
    })

    root.addEventListener("input", (e) => {
        const el = e.target

        if (el.id == "search-bar") {
            setSearch(el.value)
        }
    })

    root.addEventListener("change", (e) => {
        const el = e.target;

        if (el.matches(".quantity-counter")) {
            let value = Number(el.value);

            if (!value || value < 1) value = 1;
            if (value > 10) value = 10;

            el.value = value;

            const gameId = el.closest(".game-column").dataset.id;
            changeQuantity(gameId, value);
        }
    });

}
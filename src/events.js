import { setAppState,setCategory,setSearch,addToCart,deleteFromCart } from "./main.js"
const root = document.getElementById("root")
const searchInput = document.getElementById("search-bar")
export function events(){
    
    root.addEventListener("click", (e)=>{
        e.preventDefault()
        const el = e.target
        const btn = el.closest("[data-category]");
        if(btn){
            setCategory(btn.dataset.category)
        }

        if(el.closest(".game-card")){
            const gameId = el.closest(".game-card").dataset.id
            addToCart(gameId)
        }

        if(el.closest(".go-home")){
            setAppState("home")
        }

        if(el.closest(".go-cart")){
            setAppState("cart")
        }

        if(el.closest(".delete-from-cart")){
            const gameId = el.closest(".game-column").dataset.id
            deleteFromCart(gameId)
        }
    })

    root.addEventListener("input",(e)=>{
        const el = e.target
        if(el.id == "search-bar"){
            setSearch(el.value)
        }
    })

    root.addEventListener("focusout", (e)=>{
        const el = e.target
        if(el.id == "search-bar"){
            setSearch("")
        }      
    })

}
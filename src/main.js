import { HomePage } from "./pages/HomePage.js";
import { CartPage } from "./pages/CartPage.js";
import { games } from "./services/gamesDB.js";
import { events } from "./events.js";
import { GameCard } from "./components/GameCard.js";
import { Navbar } from "./components/Navbar.js";
import { setCart,getCart } from "./services/storageService.js";

const root = document.getElementById("root")
let AppState = "home"
let cart = getCart()
let category = "All"
let searchValue = ""

export function setCategory(newValue){
    category = newValue
    renderCards()
}

export function setSearch(newValue){
    searchValue = newValue
    renderCards()
}

export function setAppState(newValue){
    AppState = newValue
    render()
}

export function addToCart(gameId){
    const currentGame = games.find(game => game.id == gameId)
    const isExisting = cart.find(game => game.id == currentGame.id)
    
    if(isExisting) return;

    cart.push(currentGame)
    setCart(cart)
}

export function deleteFromCart(gameId){
    const updatedCart = cart.filter(game => game.id !== Number(gameId))
    cart = updatedCart
    setCart(cart)
    render()
}

function renderCards(){
    let filteredGames = []
    const container = document.getElementById("cards-container")
    if(category != "All"){
        filteredGames = games.filter(game => game.category === category)
    } else{
        filteredGames = games
    }
    if(searchValue != ""){
        filteredGames = games.filter(game => game.title.toLowerCase().startsWith(searchValue.toLowerCase()))
    }

    container.innerHTML = filteredGames.map(GameCard).join("")
}

function render() {
        root.innerHTML = App();
}

function App(){
    let page = ""
    if(AppState == "home"){
        page = HomePage(games,category,searchValue)
    } else if(AppState == "cart"){
        page = CartPage(cart)
    }

    if(AppState == "home") return `
        <div class="min-h-screen flex flex-col">
            <main class="flex-1 p-4">
                ${page}
            </main>
                ${Navbar(AppState)}
        </div>`

    else if(AppState == "cart")   return `
        <div class="min-h-screen flex flex-col">
            <main class="flex-1 flex flex-col md:flex-row md:items-start gap-4 p-4">
                ${page}
            </main>
                ${Navbar(AppState)}
        </div>`   
}

window.addEventListener("DOMContentLoaded",()=>{
    render()
    events()
})
import { HomePage } from "./pages/HomePage.js";
import { games } from "./services/gamesDB.js";
import { events } from "./events.js";
import { GameCard } from "./components/GameCard.js";
import { Navbar } from "./components/Navbar.js";

const root = document.getElementById("root")
const AppState = "home"
const cart = []
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
    return `
        <div class="min-h-screen flex flex-col">
            <main class="flex-1 p-4">
                ${page}
            </main>
                ${Navbar(AppState)}
        </div>`
}

window.addEventListener("DOMContentLoaded",()=>{
    render()
    events()
})
import { HomePage } from "./pages/HomePage.js";
import { games } from "./services/gamesDB.js";
import { events } from "./events.js";
import { GameCard } from "./components/GameCard.js";

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
    console.log("the new search value:", searchValue)
}

export function renderCards(){
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
    if(AppState == "home"){
        return HomePage(games,category,searchValue)
    } else if(AppState == "cart"){
        return CartPage(cart)
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    render()
    events()
})
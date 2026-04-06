import { HomePage } from "./pages/HomePage.js";
import { CartPage } from "./pages/CartPage.js";
import { games } from "./services/gamesDB.js";
import { events } from "./events.js";
import { GameCard } from "./components/GameCard.js";
import { Navbar } from "./components/Navbar.js";
import { saveCart,getCart } from "./services/storageService.js";
import { AlertMessage,purchaseAlert } from "./components/AlertMessage.js";
import { Header } from "./components/Header.js";

const root = document.getElementById("root")
let AppState = "home"
let cart = getCart()
let category = "All"
let searchValue = ""

function updateCart(newCart){
    cart = newCart
    saveCart(newCart)
}

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
    let updatedCart;
    if(isExisting) {
        updatedCart = cart.map(game => 
           game.id === Number(gameId) ? {...game,quantity: game.quantity + 1} : game
        )
    } else {
        updatedCart = [...cart, {...currentGame, quantity: 1}]
    }
    
    updateCart(updatedCart)
    render()
    showAlert()
}

export function deleteFromCart(gameId){
    const updatedCart = cart.filter(game => game.id !== Number(gameId))
    updateCart(updatedCart)
    render()
}

export function changeQuantity(gameId,qty){
    const updatedCart = cart.map(game => {
        if(game.id === Number(gameId)) {
            return {...game,quantity: qty}
        } return game
    })
    updateCart(updatedCart)
    render()
}

export function ClearCart(){
    cart = []
    updateCart(cart)
    render()
    setAppState("home")
    showMessage()
}

export function showMessage(){
    root.innerHTML += purchaseAlert()
    setTimeout(() =>{
        const message = document.getElementById("purchase-message")
        message.remove()
    }, 5000)
}

export function showAlert(){
    root.innerHTML += AlertMessage()
    setTimeout(() =>{
        const alert = document.getElementById("add-message")
        alert.remove()
    }, 5000)
}
let filteredGames = []
function renderCards(){
    
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
    const number = document.getElementById("number")
    number.textContent = calculNumber()
}

function calculNumber(){
    if(filteredGames.length <= 0){
        return games.length
    } else{
        return filteredGames.length
    }
}

function render() {
    root.innerHTML = App();
}

function App(){
    let page = ""
    if(AppState == "home"){
        page = HomePage(games,category,searchValue,filteredGames.length)
    } else if(AppState == "cart"){
        page = CartPage(cart)
    }

    if(AppState == "home") return `
        <div class="min-h-screen min-w-sm flex flex-col">
            <main class="flex-1 p-4">
                ${page}
            </main>
                ${Navbar(AppState)}
        </div>`

    else if(AppState == "cart")   return `
        <div class="min-h-screen min-w-sm flex flex-col">
            ${Header()}
            <main class="flex-1 flex flex-col md:flex-row md:items-start gap-4 p-4">
                ${page}
            </main>
                ${Navbar(AppState)}
        </div>`   
}

window.addEventListener("DOMContentLoaded",()=>{
    render()
    events()
    const number = document.getElementById("number")
    number.textContent = calculNumber()
})
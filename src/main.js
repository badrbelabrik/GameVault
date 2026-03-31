import { HomePage } from "./pages/HomePage.js";
import { games } from "./services/gamesDB.js";
import { events } from "./events.js";
const root = document.getElementById("root")
const AppState = "home"
const cart = []

function render() {
        root.innerHTML = App();
}

function App(){
    if(AppState == "home"){
        return HomePage(games);
    } else if(AppState == "cart"){
        return CartPage(cart);
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    render()
    events()
})
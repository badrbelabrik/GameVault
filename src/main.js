import { HomePage } from "./pages/HomePage.js";
import { games } from "./services/gamesDB.js";
import { events } from "./events.js";

const root = document.getElementById("root")
const AppState = "home"
const cart = []
let category = "All"

export function setCategory(newValue){
    category = newValue
    console.log("CATEGORY:", category);
    render()
}

function render() {
        root.innerHTML = App();
}

function App(){
    if(AppState == "home"){
        return HomePage(games,category)
    } else if(AppState == "cart"){
        return CartPage(cart)
    }
}

window.addEventListener("DOMContentLoaded",()=>{
    render()
    events()
})
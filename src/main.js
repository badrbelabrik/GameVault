import { HomePage } from "./pages/HomePage";
import { games } from "./services/gamesDB";
const AppState = "home"
const cart = []

function render() {
    if(AppState == "home"){
        root.innerHTML = HomePage(games);
    } else if(AppState == "cart"){
        root.innerHTML = CartPage();
    }
}

function App(){
    return ``
}
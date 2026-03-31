import { SearchBar } from "../components/SearchBar.js"
import { PopularGames } from "../components/PopularGames.js"
import { Categories } from "../components/Categories.js"
import { CardsContainer } from "../components/CardsContainer.js"

export function HomePage(games,category){
    return`${SearchBar()}
           ${PopularGames()}
           ${Categories()}
           ${CardsContainer(games,category)}`
}
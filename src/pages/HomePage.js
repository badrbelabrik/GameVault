import { SearchBar } from "../components/SearchBar.js"
import { PopularGames } from "../components/PopularGames.js"
import { Categories } from "../components/Categories.js"
import { CardsContainer } from "../components/CardsContainer.js"
import { Header } from "../components/Header.js"

export function HomePage(games,category,searchValue,number){
    return`${Header(number)}
           ${SearchBar()}
           ${PopularGames()}
           ${Categories()}
           ${CardsContainer(games)}`
}
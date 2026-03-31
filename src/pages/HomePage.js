import { SearchBar } from "../components/SearchBar"
import { PopularGames } from "../components/PopularGames"
import { Categories } from "../components/Categories"
import { CardsContainer } from "../components/CardsContainer"

export function HomePage(games){
    return`${SearchBar()}
           ${PopularGames()}
           ${Categories()}
           ${CardsContainer(games)}`
}
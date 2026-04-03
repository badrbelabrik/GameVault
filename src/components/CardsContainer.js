import { GameCard } from "./GameCard.js"

export function CardsContainer(games){
    return `<div id="cards-container" class="flex flex-col justify-center items-center gap-4 sm:grid sm:grid-cols-2 md:grid md:grid-cols-4">
                ${ListCards(games)}
            </div>`
}

export function ListCards(games){
    const gamesList = []

    for(const game of games){
        const cardDiv = GameCard(game)
        gamesList.push(cardDiv)
    }

    return gamesList.join("")
}



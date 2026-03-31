import { GameCard } from "./GameCard.js"

export function CardsContainer(games){
    return `<div class="flex flex-col justify-center items-center gap-4 md:grid grid-cols-4">
                ${ListCards(games)}
            </div>`
}

function ListCards(games){
    const gamesList = []
    for(const game of games){
        const cardDiv = GameCard(game.title,game.image,game.rating,game.price,game.category)
        gamesList.push(cardDiv)
    }
    return gamesList.join("")
}


import { GameCard } from "./GameCard.js"

export function CardsContainer(games,category){
    return `<div class="flex flex-col justify-center items-center gap-4 md:grid grid-cols-4">
                ${ListCards(games,category)}
            </div>`
}

function ListCards(games,category){
    const gamesList = []
    if(category != "All"){
        const filteredGames = games.filter(game => game.category === category)
        for(const game of filteredGames){
        const cardDiv = GameCard(game.title,game.image,game.rating,game.price,game.category)
        gamesList.push(cardDiv)
    }
    } else {
        for(const game of games){
        const cardDiv = GameCard(game.title,game.image,game.rating,game.price,game.category)
        gamesList.push(cardDiv)
    }
    }
    return gamesList.join("")
}



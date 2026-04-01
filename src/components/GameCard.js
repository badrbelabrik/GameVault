export function GameCard(game){
    return `     <div class="game-card w-full h-72 bg-[#E9ECF5] rounded-xl overflow-hidden cursor-pointer" data-id="${game.id}">
                    <!-- poster image -->
                    <div class="h-2/3">
                        <img src="${game.image}" alt="" class="w-full h-full object-fill">
                    </div>
                    <!-- card content -->
                        <div class="flex justify-between items-center h1/3 p-2">
                            <div class="flex flex-col gap-1">
                            <p class="font-bold">${game.title}</p>
                            <p class="font-bold">${game.rating}<i class="fa-solid fa-star text-[#F4CD2A]"></i></p>
                            <P class="font-bold">${game.price} $</P>
                        </div>
                        <div class="flex items-center bg-white rounded-lg p-2 font-bold shadow-xl place-self-end">${game.category}</div>
                    </div>
                </div>`
}
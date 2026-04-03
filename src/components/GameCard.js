export function GameCard(game) {
    return `
            <div class="game-card w-full h-72 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition" data-id="${game.id}">
                <!-- poster image -->
                    <div class="relative h-2/3">
                            <img src="${game.image}" alt="" class="w-full h-full object-cover">
                            <button class="add-to-cart absolute top-4 right-4 bg-[#495D96] text-white text-xs px-3 py-1 rounded-lg hover:bg-[#687cb3] transition cursor-pointer">Add <i class="fa-solid fa-cart-plus"></i></button>
                    </div>
                <!-- card content -->
                    <div class="flex justify-between items-center h-1/3 p-3">
                    <!-- left -->
                        <div class="flex flex-col gap-1">
                                <p class="font-semibold text-sm">${game.title}</p>
                                <p class="text-sm flex items-center gap-1 text-gray-600">${game.rating}<i class="fa-solid fa-star text-[#F4CD2A] text-xs"></i></p>
                                <p class="font-bold text-[#495D96]">${game.price} $</p>
                        </div>
                <!-- badge -->
                        <div class="px-2 py-1 text-xs font-medium text-[#495D96] bg-[#E9ECF5] rounded-full">${game.category}</div>
                    </div>
            </div>
`;
}
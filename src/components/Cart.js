export function Cart(game){
    return`    <div class="w-full flex flex-col justify-center gap-4 md:w-2/3">
                    <!-- main cart -->
                    <div class="flex flex-col justify-center gap-6 p-4 bg-white rounded-2xl">
                        <h1 class="font-bold text-2xl">Cart List</h1>
                        <!-- game details 1 -->
                            <div class="grid grid-cols-3 items-center gap-4">
                                <img src="${game.image}" alt="" class="w-20 h-20 object-fill">
                                <div class="flex flex-col items-center gap-2">
                                    <p class="font-bold">${game.title}</p>
                                <div class="flex items-center gap-2">
                                    <input type="number" min="1" max="10" value="1" class="text-center outline-1 rounded-md">
                                    <i class="fa-solid fa-trash-can cursor-pointer hover:text-red-500 transition"></i>
                                </div>
                                </div>
                            <div class="flex flex-col items-end">
                                <p>QTY: 1</p>
                                <p class="font-bold">${game.price} $</p>
                            </div>
                            </div>
                    </div>
                </div>`
}
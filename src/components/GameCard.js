export function GameCard(title,image,rating,price,category){
    return `     <div class="w-full h-72 bg-white rounded-xl overflow-hidden">
                    <!-- poster image -->
                    <div class="h-2/3">
                        <img src="${image}" alt="" class="w-full h-full object-cover">
                    </div>
                    <!-- card content -->
                        <div class="flex justify-between items-center h1/3 p-2">
                            <div class="flex flex-col gap-1">
                            <p class="font-bold">${title}</p>
                            <p class="font-bold">${rating}<i class="fa-solid fa-star text-[#F4CD2A]"></i></p>
                            <P class="font-bold">${price} $</P>
                        </div>
                        <div class="flex items-center bg-white rounded-lg p-2 font-bold shadow-xl">${category}</div>
                    </div>
                </div>`
}
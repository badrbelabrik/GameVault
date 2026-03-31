export function GameCard(title,image,rating,price,category){
    return `     <div class="w-full h-72 bg-white rounded-xl overflow-hidden">
                    <!-- poster image -->
                    <div class="h-2/3">
                        <img src="images/gta5.jpg" alt="" class="w-full h-full object-cover">
                    </div>
                    <!-- card content -->
                        <div class="flex justify-between items-center h1/3 p-2">
                            <div class="flex flex-col gap-1">
                            <p class="font-bold">Grand Theft Auto 5</p>
                            <p class="font-bold">6.5<i class="fa-solid fa-star text-[#F4CD2A]"></i></p>
                            <P class="font-bold">54.99 $</P>
                        </div>
                        <div class="flex items-center bg-white rounded-lg p-2 font-bold shadow-xl">Action</div>
                    </div>
                </div>`
}
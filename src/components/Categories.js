export function Categories(){
    return `    <p class="font-bold">Categories</p>
                <div id="categories" class="flex items-center gap-2 h-16">
                    <button class="flex items-center bg-[#495D96] rounded-lg p-2 cursor-pointer w-auto text-white shadow-xl" data-category="All">All</button>
                    <button class="flex items-center bg-white rounded-lg p-2 cursor-pointer  font-bold shadow-xl hover:scale-110" data-category="FPS">FPS</button>
                    <button class="flex items-center bg-white rounded-lg p-2 cursor-pointer font-bold shadow-xl hover:scale-110" data-category="RPG">RPG</button>
                    <button class="flex items-center bg-white rounded-lg p-2 cursor-pointer font-bold shadow-xl hover:scale-110" data-category="Sports">Sports</button>
                    <button class="flex items-center bg-white rounded-lg p-2 cursor-pointer font-bold shadow-xl hover:scale-110" data-category="Action">Action</button>
                    <button class="flex items-center bg-white rounded-lg p-2 cursor-pointer font-bold shadow-xl hover:scale-110" data-category="Racing">Racing</button>
                </div>`
}
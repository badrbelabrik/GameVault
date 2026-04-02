export function Navbar(currentPage){
    return `    
        <nav class="flex justify-around items-center bg-[#E9ECF5] p-2 h-12 sticky bottom-0 rounded-t-xl">
            <button class="go-home flex justify-center items-center p-2 rounded-2xl cursor-pointer ${currentPage === "home" ? "bg-[#495D96]" : ""}">
                <i class="text-2xl fa-solid fa-house ${currentPage === "home" ? "text-white" : "text-[#495D96]"}"></i>
            </button>    
            <button class="go-cart flex justify-center items-center p-2 rounded-2xl cursor-pointer ${currentPage === "cart" ? "bg-[#495D96]" : ""}">
                <i class="text-2xl fa-solid fa-cart-shopping ${currentPage === "cart" ? "text-white" : "text-[#495D96]"}"></i>
            </button>
            <button class="flex justify-center items-center p-2 rounded-2xl cursor-pointer ${currentPage === "profile" ? "bg-[#495D96]" : ""}">
                <i class="text-2xl fa-solid fa-user ${currentPage === "profile" ? "text-white" : "text-[#495D96]"}"></i>
            </button>
            
        </nav>`
}

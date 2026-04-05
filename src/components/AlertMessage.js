

export function AlertMessage(){
    return `<div id="add-message" class="fixed top-6 right-6 bg-[#1C1F2B] text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50 animate-slide-in">
  
  <i class="fa-solid fa-cart-shopping text-[#00A8FF]"></i>
  
  <span class="text-sm">
    Added to cart
  </span>

</div>`
}

export function purchaseAlert(){
    return`<div id="purchase-message" class="fixed top-6 right-6 bg-white text-gray-800 px-5 py-4 rounded-xl shadow-lg border-l-4 border-green-500 flex items-center gap-3 z-50 animate-slide-in">
  
  <i class="fa-solid fa-circle-check text-green-500 text-xl"></i>
  
  <div class="flex flex-col">
    <span class="font-semibold text-sm">Purchase successful</span>
    <span class="text-xs text-gray-500">Your order has been completed</span>
  </div>

</div>`
}
export function CheckoutCard(total){
    return `<div class="w-full h-full flex flex-col justify-center items-center gap-4 p-4 bg-white rounded-2xl md:w-1/3 md:sticky md:top-4">
                <!-- coupon -->
                <div class="w-full flex flex-col gap-2 place-self-start place-">
                    <p>Have coupon?</p>
                    <div class="flex w-full rounded-lg overflow-hidden border border-gray-300">
                        <input type="text" placeholder="Coupon code" class="flex-1 px-4 py-2 outline-none bg-gray-50"/>
                        <button class="px-4 py-2 bg-white font-medium hover:bg-gray-100 transition">Apply</button>
                    </div>
                </div>
                <!-- separation line -->
                <div class="border-t border-gray-300 w-full"></div>
                <!-- total price -->
                <div class="w-full flex justify-between items-center">
                    <p class="font-bold">Total Price:</p>
                    <p>${total} $</p>
                </div>
                <!-- discount -->
                <div class="w-full flex justify-between items-center">
                    <p class="font-bold">Discount:</p>
                    <p class="text-green-600">-50 $</p>
                </div>
                <!-- separation line -->
                    <div class="border-t border-gray-300 w-full"></div>
                <!-- total -->
                <div class="w-full flex justify-between items-center">
                    <p>Total:</p>
                    <p class="font-bold text-xl">${total} $</p>
                </div>
                <!-- checkout buttons -->
                <div class="flex flex-col gap-2 w-full">
                    <button class="purchase text-white p-2 rounded-xl bg-[#00A524] cursor-pointer ">Make purchase</button>
                    <button class="go-home text-white p-2 rounded-xl bg-[#bababa] cursor-pointer ">Back to shop</button>
                </div>
            </div>`
}
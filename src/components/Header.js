export function Header(){
  return `<div class="flex justify-center md:justify-between items-center">
            <img src="images/gamevault-logo.png" alt="game-vault-logo" class="h-32 w-auto object-contain place-self-center">
            <button class="hidden go-cart md:flex justify-center items-center p-2 rounded-2xl cursor-pointer">
                <i class="text-2xl fa-solid fa-cart-shopping text-[#495D96]"></i>
            </button>
          </div>`
}
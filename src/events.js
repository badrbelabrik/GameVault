import { setCategory } from "./main.js"

export function events(){
    const categories = document.getElementById("categories")

    categories.addEventListener("click", (e)=>{
        e.preventDefault()
        const btn = e.target.closest("[data-category]");
        if(btn){
            setCategory(btn.dataset.category)
        }
    })
}
import { setCategory } from "./main.js"
const root = document.getElementById("root")
export function events(){
    
    root.addEventListener("click", (e)=>{
        e.preventDefault()
        const btn = e.target.closest("[data-category]");
        if(btn){
            setCategory(btn.dataset.category)
        }
    })
}
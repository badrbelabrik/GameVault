import { setCategory,setSearch } from "./main.js"
const root = document.getElementById("root")
const searchInput = document.getElementById("search-bar")
export function events(){
    
    root.addEventListener("click", (e)=>{
        e.preventDefault()
        const el = e.target
        const btn = el.closest("[data-category]");
        if(btn){
            setCategory(btn.dataset.category)
        }
    })

    root.addEventListener("input",(e)=>{
        const el = e.target
        if(el.id == "search-bar"){
            setSearch(el.value)
        }
    })

    root.addEventListener("focusout", (e)=>{
        const el = e.target
        if(el.id == "search-bar"){
            setSearch("")
        }
            
    })
}
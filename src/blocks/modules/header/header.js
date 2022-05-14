let burger = document.querySelector(".menu-mobile__burger")
let menu = document.querySelector(".menu-mobile")
let section = document.querySelector("section")

burger.addEventListener("click", menuActive)

function menuActive(e){
    if(section.offsetWidth <= 1170 && section.offsetWidth >=  758){
        if(!burger.classList.contains("active")){
            menu.style.left = '80%'
            burger.classList.add("active")
        } else {
            menu.style.left = '1200px'
            burger.classList.remove("active")
        }
    } else {
        if(!burger.classList.contains("active")){
            menu.style.left = '0'
            burger.classList.add("active")
        } else {
            menu.style.left = '1200px'
            burger.classList.remove("active")
        }
    }
    
    
}
section.onclick = (e) => {
    burger.classList.remove("active")
    menu.style.left = '1200px'
}
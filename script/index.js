const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("header ul.nav");

if(window.innerWidth > 768){
    menu.classList.remove("showMenu");
    menuToggle.classList.remove("menuActive");
}

menuToggle.addEventListener("click", e=>{
    menuToggle.classList.toggle("menuActive"); 
    menu.classList.toggle("showMenu");
})

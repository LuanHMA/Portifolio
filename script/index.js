const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("header ul.nav");
const main = document.querySelector("main");
const navLink = document.querySelectorAll(".nav-link");

if(window.innerWidth > 768){
    menu.classList.remove("showMenu");
    menuToggle.classList.remove("menuActive");
}

menuToggle.addEventListener("click", e=>{
    menuToggle.classList.toggle("menuActive"); 
    menu.classList.toggle("showMenu");
    main.classList.toggle("desfocar");

})

navLink.forEach(item=> item.addEventListener("click", closeMenu))

function closeMenu(){
    menuToggle.classList.remove("menuActive");
    main.classList.remove("desfocar");
    menu.classList.remove("showMenu");
}


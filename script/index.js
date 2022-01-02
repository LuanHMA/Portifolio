const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector("header ul.nav");
const main = document.querySelector("main");

if(window.innerWidth > 768){
    menu.classList.remove("showMenu");
    menuToggle.classList.remove("menuActive");
}

menuToggle.addEventListener("click", e=>{
    menuToggle.classList.toggle("menuActive"); 
    menu.classList.toggle("showMenu");
    main.classList.toggle("desfocar");

})

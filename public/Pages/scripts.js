const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")
const likeFill = document.querySelector(".place__like-icon")
let navOpen = false;
let likeActive = false;

navBtn.addEventListener("click", function (){
    if(navOpen ){
        navBtn.classList.remove("nav__btn--open")

        navMenu.classList.remove("nav-menu--open")
        navOpen = false;

    }else  {
        navBtn.classList.add("nav__btn--open")
        navMenu.classList.add("nav-menu--open")
        navOpen = true;

    }
});
const desktopMenu = document.querySelector(".desktop-menu__link")

let desktopMenuActive = false;

desktopMenu.addEventListener("click", function() {
    
        desktopMenu.classList.add("desktop-menu__link-active")
        
    
});

likeFill.addEventListener("click", function() {
    if(likeActive){
        likeFill.classList.remove("place__like-icon--fill")
        likeActive = false;
    }else{
        likeFill.classList.add("place__like-icon-fill")
        likeActive = true;
    }
})
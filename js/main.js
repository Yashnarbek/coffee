let elBurger = document.querySelector(".site-header__burger-mnu")
let elNav = document.querySelector(".site-header__nav")

elBurger.addEventListener("click", function(){
    elNav.classList.toggle("active")
    elBurger.classList.toggle("close-btn")
})

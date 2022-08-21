let elBurger = document.querySelector(".site-header__burger-mnu")
let elNav = document.querySelector(".site-header__nav")

let modal = document.querySelector(".modal-box")
let checkOutMobile = document.querySelector(".check-out-mobile")
let checkOut = document.querySelector(".check-out")
let create = document.querySelector(".js-create-plane")
let body = document.querySelector("body")

elBurger.addEventListener("click", function(){
    elNav.classList.toggle("active")
    elBurger.classList.toggle("close-btn")
})

create.addEventListener("click", function(){
    modal.classList.add("active")
    body.classList.add("scroll")
})

checkOutMobile.addEventListener("click", function(){
    modal.classList.remove("active")
    body.classList.remove("scroll")
})
checkOut.addEventListener("click", function(){
    modal.classList.remove("active")
    body.classList.remove("scroll")
})
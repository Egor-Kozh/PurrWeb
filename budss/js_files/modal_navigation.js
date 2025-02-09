const modalNavigationClose = document.querySelector(".modal_navigation_close-logo")
modalNavigationClose.addEventListener("click", function(){
    const modalNavigation = document.querySelector(".modal_navigation.active")
    modalNavigation.classList.remove("active")
})

const burgerButt = document.querySelector(".burger_butt")
burgerButt.addEventListener("click", function(){
    const modalNavigation = document.querySelector(".modal_navigation")
    modalNavigation.classList.add("active")
})
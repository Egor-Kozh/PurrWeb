const modal_navigation_close = document.querySelector(".modal_navigation_close-logo")
modal_navigation_close.addEventListener("click", function(){
    const modal_navigation = document.querySelector(".modal_navigation.active")
    modal_navigation.classList.remove("active")
})

const burger_butt = document.querySelector(".burger_butt")
burger_butt.addEventListener("click", function(){
    const modal_navigation = document.querySelector(".modal_navigation")
    modal_navigation.classList.add("active")
})
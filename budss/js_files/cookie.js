setTimeout(() => {
    const cookie = document.querySelector(".cookie")
    cookie.classList.add("active_cookie")
}, 5000)

const cookie_accept = document.querySelector(".accept_cookie")
cookie_accept.addEventListener("click", function(e){
    Close_cookie()
 }) 
const cookie_decline = document.querySelector(".decline_cookie")
cookie_decline.addEventListener("click", function(e){
    Close_cookie()
 }) 

function Close_cookie(){
    const cookie = document.querySelector(".cookie.active_cookie")
    cookie.classList.remove("active_cookie")
}
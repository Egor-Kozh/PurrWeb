setTimeout(() => {
    const cookie = document.querySelector(".cookie")
    cookie.classList.add("active_cookie")
}, 5000)

const cookieAccept = document.querySelector(".accept_cookie")
cookieAccept.addEventListener("click", function(e){
    closeCookie()
 }) 
const cookieDecline = document.querySelector(".decline_cookie")
cookieDecline.addEventListener("click", function(e){
    closeCookie()
 }) 

function closeCookie(){
    const cookie = document.querySelector(".cookie.active_cookie")
    cookie.classList.remove("active_cookie")
}
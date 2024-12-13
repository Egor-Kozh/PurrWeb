const modal_buttons = document.querySelectorAll(".modal_open")


for(let i = 0; i < modal_buttons.length; i++){
    const modal_button = modal_buttons[i]
    modal_button.addEventListener("click", function(e){
        Open_modal()
    })
}

function Open_modal() {
    const modal = document.querySelector(".modal")
    modal.classList.add("active")    
}


const modal_close = document.querySelector(".modal_close")

modal_close.addEventListener("click", function(e){
    Close_modal()
})


function Close_modal(){
    const modal_open = document.querySelector(".modal.active")
    modal_open.classList.remove("active")    
}


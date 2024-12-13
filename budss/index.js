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


const modal_close_super = document.querySelector(".modal_close_super.btn.light")
modal_close_super.addEventListener("click", function(e){
    Close_modal()
})

const modal_close = document.querySelector(".modal_close")
modal_close.addEventListener("click", function(e){
    Close_modal()
})

function Close_modal(){
    const modal_open = document.querySelector(".modal.active")
    modal_open.classList.remove("active")    

    if(document.querySelector(".modal_accept.active_accept")){
        const modal_next_open = document.querySelector(".modal_accept.active_accept")
        modal_next_open.classList.remove("active_accept")

        modal_dis = document.querySelector(".modal_content.disabled")
        modal_dis.classList.remove("disabled")
    }

    const wrong_text = document.querySelectorAll(".wrong")
    for(let i = 0; i < wrong_text.length; i++){
        wrong_text[i].remove()
    }

    const wrong_input = document.querySelectorAll(".wrong_input")
    for(let i = 0; i < wrong_input.length; i++){
        wrong_input[i].style.borderColor = "rgba(241, 241, 241, 1)";
        wrong_input[i].classList.remove("wrong_input")
    }   
}

const modal_submit = document.querySelector(".submit")
modal_submit.addEventListener("click", function(e){
    let flag = CheckInputValue(true)
    if(flag){
        const user_params = {}
        const modal_input = document.querySelectorAll(".input_modal")
        for(let i = 0; i < modal_input.length; i++){
            user_params[modal_input[i].name] = modal_input[i].value
            modal_input[i].value = ""
        }

        const new_user = new User(user_params)

        userList.add_user(new_user)
        userList.show_all_users()
        
        const modal_content = document.querySelector(".modal_content")
        modal_content.classList.add("disabled")

        const modal_next = document.querySelector(".modal_accept")
        modal_next.classList.add("active_accept")
    }
})
function CheckInputValue(bool){
    const input_required = document.querySelectorAll("[required]")
    let flag = bool

    if(input_required){
        for(let i = 0; i < input_required.length; i++){
            if(!input_required[i].value){
                flag = false

                if(!document.querySelector(`.wrong_${input_required[i].name}`)){
                    const wrong_input = document.getElementById(`${input_required[i].name}`)
                    wrong_input.style.borderColor = "rgba(236, 18, 17, 1)";
                    wrong_input.classList.add("wrong_input")
                    wrong_input.addEventListener("click" , function Clear(e){
                        console.log("clear")
                        wrong_input.classList.remove(".wrong_input")
                        wrong_input.style.borderColor = "rgba(241, 241, 241, 1)";
                        const wrong = document.querySelector(`.wrong_${wrong_input.id}`)
                        wrong.remove()

                        if(document.querySelectorAll(".wrong").length == 1){
                            document.querySelector(".wrong_modal").remove()
                        }

                        wrong_input.removeEventListener("click", Clear)
                    })

                    const wrong_text = document.createElement("p")
                    wrong_text.classList.add(`wrong_${input_required[i].name}`)
                    wrong_text.classList.add(`wrong`)
                    wrong_text.innerHTML = "This field is required."
                    wrong_text.style.color = "rgba(236, 18, 17, 1)"
                    wrong_text.style.fontSize = "12px"
                    wrong_text.style.fontFamily = "Outfit_Regular"
                    wrong_text.style.height = "20px"
                    wrong_text.style.width = "fit-content"

                    const wrong_field = wrong_input.parentElement
                    wrong_field.appendChild(wrong_text)
                }
            }
        }
        if(!flag & !document.querySelector(".wrong_modal")){
            const wrong_text = document.createElement("p")
            wrong_text.classList.add("wrong_modal")
            wrong_text.classList.add("wrong")
            wrong_text.innerHTML = "Please fill in all required fields"
            wrong_text.style.color = "rgba(236, 18, 17, 1)"
            wrong_text.style.fontSize = "16px"
            wrong_text.style.fontFamily = "Outfit_Regular"
            wrong_text.style.height = "20px"
            wrong_text.style.width = "fit-content"

            const wrong = document.querySelector(".modal_form")
            wrong.appendChild(wrong_text)
        }
    }

    return flag
}

class User{
    constructor({name, email, phone, company, website_url}){
        this.name = name
        this.email = email
        this.phone = phone
        this.company = company
        this.website_url = website_url
    }
}

class UserList{
    constructor(){
        this.user_list = []
    }

    add_user(user) {
        this.user_list.push(user)
    }

    show_all_users(){
        for(let i = 0; i < this.user_list.length; i++){
            console.log(this.user_list[i])
        }
    }
}

const userList = new UserList();

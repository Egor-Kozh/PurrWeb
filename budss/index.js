

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
        
        Close_modal()
        debugger
    }
})
function CheckInputValue(bool){
    const input_required = document.querySelectorAll("[required]")
    let flag = bool

    if(input_required){
        for(let i = 0; i < input_required.length; i++){
            if(!input_required[i].value){
                flag = false
            }
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

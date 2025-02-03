const modalButtons = document.querySelectorAll(".modal_open")
for(let i = 0; i < modalButtons.length; i++){
    const modalButton = modalButtons[i]
    modalButton.addEventListener("click", function(e){
       openModal()
    }) 
}
function openModal() {
    const modal = document.querySelector(".modal")
    modal.classList.add("active")    
}

const modalCloseSuper = document.querySelector(".modal_close_super.btn.light")
modalCloseSuper.addEventListener("click", function(e){
    closeModal()
})

const modalClose = document.querySelector(".modal_close")
modalClose.addEventListener("click", function(e){
    closeModal()
})

function closeModal(){
    const modalOpen = document.querySelector(".modal.active")
    modalOpen.classList.remove("active")

    phoneMask = ['+7'," ",'_','_','_', " - ", '_','_','_', " - ", '_', '_', " - ", '_', '_', " "] 

    if(document.querySelector(".modal_accept.active_accept")){
        const modalNextOpen = document.querySelector(".modal_accept.active_accept")
        modalNextOpen.classList.remove("active_accept")

        const modalDis = document.querySelector(".modal_content.disabled")
        modalDis.classList.remove("disabled")
    }

    const wrongText = document.querySelectorAll(".wrong")
    for(let i = 0; i < wrongText.length; i++){
        wrongText[i].remove()
    }

    const wrongInput = document.querySelectorAll(".wrong_input")
    for(let i = 0; i < wrongInput.length; i++){
        wrongInput[i].style.borderColor = "rgba(241, 241, 241, 1)";
        wrongInput[i].classList.remove("wrong_input")
    }   
}

const modalSubmit = document.querySelector(".submit")
modalSubmit.addEventListener("click", function(e){
    let flag_pat = checkPatternInput(false)
    let flag_null = checkInputValue(true)

    if(flag_null){

        if(flag_pat){
            const userParams = {}
            const modalInput = document.querySelectorAll(".input_modal")
            for(let i = 0; i < modalInput.length; i++){
                userParams[modalInput[i].name] = modalInput[i].value
                modalInput[i].value = ""
            }

            const newUser = new User(userParams)

            userList.addUser(newUser)
            userList.showAllUsers()
            
            const modalContent = document.querySelector(".modal_content")
            modalContent.classList.add("disabled")

            const modalNext = document.querySelector(".modal_accept")
            modalNext.classList.add("active_accept")
        }
    }
})


function checkInputValue(bool){
    const inputRequired = document.querySelectorAll("[required]")
    let flag = bool

    if(inputRequired){
        for(let i = 0; i < inputRequired.length; i++){
            if(!inputRequired[i].value){
                flag = false

                if(!document.querySelector(`.wrong_${input_required[i].name}`)){
                    const wrongInput = document.getElementById(`${input_required[i].name}`)
                    wrongInput.parentElement.style.borderColor = "rgba(236, 18, 17, 1)";
                    wrongInput.parentElement.classList.add("wrong_input")
                    wrongInput.addEventListener("input" , function Clear(e){
                        wrongInput.parentElement.classList.remove(".wrong_input")
                        wrongInput.parentElement.style.borderColor = "rgba(241, 241, 241, 1)";
                        const wrong = document.querySelector(`.wrong_${wrong_input.id}`)
                        wrong.remove()

                        if(document.querySelectorAll(".wrong").length == 1){
                            document.querySelector(".wrong_modal").remove()
                        }

                        wrongInput.removeEventListener("input", Clear)
                    })

                    const wrongText = document.createElement("p")
                    wrongText.classList.add(`wrong_${input_required[i].name}`)
                    wrongText.classList.add(`wrong`)
                    wrongText.innerHTML = "This field is required."
                    wrongText.style.color = "rgba(236, 18, 17, 1)"
                    wrongText.style.fontSize = "12px"
                    wrongText.style.fontFamily = "Outfit_Regular"
                    wrongText.style.height = "20px"
                    wrongText.style.width = "fit-content"

                    const wrongField = wrongInput.parentElement.parentElement
                    wrongField.appendChild(wrongText)
                }
            }
        }
        if(!flag & !document.querySelector(".wrong_modal")){
            const wrongText = document.createElement("p")
            wrongText.classList.add("wrong_modal")
            wrongText.classList.add("wrong")
            wrongText.innerHTML = "Please fill in all required fields"
            wrongText.style.color = "rgba(236, 18, 17, 1)"
            wrongText.style.fontSize = "16px"
            wrongText.style.fontFamily = "Outfit_Regular"
            wrongText.style.height = "20px"
            wrongText.style.width = "fit-content"
            wrongText.style.marginTop = "10px"

            const wrong = document.querySelector(".modal_form")
            wrong.appendChild(wrongText)
        }
    }

    return flag
}


function checkPatternInput (bool){
    const patternInput = document.querySelectorAll("[pattern]")
    let flag = bool

    for(let i = 0; i < patternInput.length; i++){
        const pattern = new RegExp(patternInput[i].pattern, "g")
        if(pattern.test(patternInput[i].value)){
            flag = true
            patternInput[i].parentElement.style.borderColor = "rgba(241, 241, 241, 1)"
        }
        else{
            patternInput[i].parentElement.style.borderColor = "yellow"
            flag = false
        }
        
    }

    return flag
}

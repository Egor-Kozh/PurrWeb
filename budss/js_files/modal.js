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
    const nullValues = checkInputValue()
    const patternWrong = checkPatternInput()

    if(nullValues && patternWrong){
        const userParams = {}
        const modalInput = document.querySelectorAll(".input_modal")
        for(let i = 0; i < modalInput.length; i++){
            userParams[modalInput[i].name] = modalInput[i].value
            modalInput[i].value = ""
        }

        phoneMask.forEach((el, i) => copyPhoneMask[i] = el);

        const newUser = new User(userParams)

        userList.addUser(newUser)
        userList.showAllUsers()
        
        const modalContent = document.querySelector(".modal_content")
        modalContent.classList.add("disabled")

        const modalNext = document.querySelector(".modal_accept")
        modalNext.classList.add("active_accept")
    }
})


function checkInputValue(){
    const inputRequired = document.querySelectorAll("[required]")
    let nullValues = true

    for(let i = 0; i < inputRequired.length; i++){
        if(!inputRequired[i].value){
            nullValues = false

            if(!document.querySelector(`.wrong_${inputRequired[i].name}`)){
                const wrongInput = document.getElementById(`${inputRequired[i].name}`)
                wrongInput.parentElement.style.borderColor = "rgba(236, 18, 17, 1)";
                wrongInput.parentElement.classList.add("wrong_input")
                wrongInput.addEventListener("input" , function clear(e){
                    wrongInput.parentElement.classList.remove("wrong_input")
                    wrongInput.parentElement.style.borderColor = "rgba(241, 241, 241, 1)";
                    document.querySelector(`.wrong_${wrongInput.id}`).remove()
                    
                    if(document.querySelectorAll(".wrong_req").length == 0){
                        document.querySelector(".wrong_modal").remove()
                    }

                    wrongInput.removeEventListener("input", clear)
                })

                const wrongText = document.createElement("p")
                wrongText.classList.add(`wrong_${inputRequired[i].name}`)
                wrongText.classList.add(`wrong_req`)
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
    if(!nullValues & !document.querySelector(".wrong_modal")){
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
    

    return nullValues
}


function checkPatternInput (){
    const patternInput = document.querySelectorAll("[pattern]")
    let patternWrong = true

    for(let i = 0; i < patternInput.length; i++){
        const pattern = new RegExp(patternInput[i].pattern, "g")

        if(!Boolean(pattern.test(patternInput[i].value))){
            patternWrong = false

            if(!(document.querySelector(`.wrong_pattern_${patternInput[i].name}`)) && !patternInput[i].parentElement.classList.contains("wrong_input")){
                const wrongPattern = document.getElementById(`${patternInput[i].name}`)
                wrongPattern.parentElement.style.borderColor = "rgba(236, 18, 17, 1)";
                wrongPattern.parentElement.classList.add("wrong_input")
                wrongPattern.addEventListener("input" , function clear(e){
                    wrongPattern.parentElement.classList.remove("wrong_input")
                    wrongPattern.parentElement.style.borderColor = "rgba(241, 241, 241, 1)";
                    document.querySelector(`.wrong_pattern_${wrongPattern.id}`).remove()

                    wrongPattern.removeEventListener("input", clear)
                })

                const wrongText = document.createElement("p")
                wrongText.classList.add(`wrong_pattern_${patternInput[i].name}`)
                wrongText.classList.add(`wrong`)
                wrongText.innerHTML = `Invalid ${patternInput[i].name}`
                wrongText.style.color = "rgba(236, 18, 17, 1)"
                wrongText.style.fontSize = "12px"
                wrongText.style.fontFamily = "Outfit_Regular"
                wrongText.style.height = "20px"
                wrongText.style.width = "fit-content"

                const wrongField = wrongPattern.parentElement.parentElement
                wrongField.appendChild(wrongText)
            }
        }
    }

    return patternWrong
}

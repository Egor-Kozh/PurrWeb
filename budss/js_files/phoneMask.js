const phone = document.querySelector("#phone")

const phoneMask = ['+7'," ",'_','_','_', " - ", '_','_','_', " - ", '_', '_', " - ", '_', '_', " "] 

const copyPhoneMask = phoneMask.slice(0)

phone.addEventListener("click", function(e){
    return this.value = copyPhoneMask.join("")
})
phone.addEventListener("input", function(e) { 
    if((Number(this.value[this.value.length-1]) || this.value[this.value.length-1] == "0")){
        const num = this.value[this.value.length-1]
        
        for(let i = 0; i < phoneMask.length; i++){
            if(copyPhoneMask[i] == "_"){
                copyPhoneMask[i] = num;
                break
            }
        }
    }
    
    phone.value = copyPhoneMask.join("")
})

phone.addEventListener("keydown", function(e){
    if(e.key === "Backspace")
    {   
        for(let i = copyPhoneMask.length-1; i > 0; i--){
            if(Number(copyPhoneMask[i]) || copyPhoneMask[i] == "0"){
                copyPhoneMask[i] = "_";
                break
            }
        }

        phone.value = copyPhoneMask.join("")
    }
})
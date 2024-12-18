const phone = document.querySelector("#phone")

const phoneMask = ['+7'," ",'_','_','_', " - ", '_','_','_', " - ", '_', '_', " - ", '_', '_', " "] 

phone.addEventListener("click", function(e){
    return this.value = phoneMask.join("")
})
phone.addEventListener("input", function(e) { 
    if((Number(this.value[this.value.length-1]) || this.value[this.value.length-1] == "0")){
        const num = this.value[this.value.length-1]
        
        for(let i = 0; i < phoneMask.length; i++){
            if(phoneMask[i] == "_"){
                phoneMask[i] = num;
                break
            }
        }

        phone.value = phoneMask.join("")
    }
    else{
        phone.value = phoneMask.join("")
    }
})

phone.addEventListener("keydown", function(e){
    if(e.key === "Backspace")
    {   
        for(let i = phoneMask.length-1; i > 0; i--){
            if(Number(phoneMask[i]) || phoneMask[i] == "0"){
                phoneMask[i] = "_";
                break
            }
        }

        phone.value = phoneMask.join("")
    }
})
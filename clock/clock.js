class Clock{
    constructor(){
        this.clock = () => {};
    }

    TurnOn(){
        this.clock = setInterval(() => {
            let day = new Date();
            let sec = day.getSeconds();
            let min = day.getMinutes();
            let hour = day.getHours();
    
            let sec_id = document.getElementById("sc");
            sec_id.style.transform = `rotate(${sec * 6}deg)`;
    
            let min_id = document.getElementById("mn");
            min_id.style.transform = `rotate(${min * 6 + 0.1*sec}deg)`;
            
            let hour_id = document.getElementById("hr");
            hour_id.style.transform = `rotate(${30*(hour%12) + 0.5*min}deg)`;
            
        }, 1000)
    }

    TurnOff(){
        clearInterval(this.clock)
    }
}

const clock = new Clock();




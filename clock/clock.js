class Clock{
    constructor(){
        this.clock = () => {};
        this.clockRun = false;
        this.canClick = true;
    }
    
    turnOn(){
        console.log("on")

        this.canClick = false
        this.clockRun = true

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
        setTimeout(() => {
            this.canClick = true
        }, 2000)
    }

    turnOff(){
        console.log("off")

        this.canClick = false
        this.clockRun = false

        clearInterval(this.clock)

        setTimeout(() => {
            this.canClick = true
        }, 1000)
    }
}

const clock = new Clock();





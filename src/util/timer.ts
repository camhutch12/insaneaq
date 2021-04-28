export class Timer{
    currentTime:number;
    timerId:any;
    constructor(){
        this.currentTime =0;
    }

    startTime(){
        this.timerId = window.setInterval(() => {
         
           this.currentTime += 1;
        },1000);
    }

    stopTime(){
        clearInterval(this.timerId);
    }

    getTime(){
        return this.currentTime;
    }
}
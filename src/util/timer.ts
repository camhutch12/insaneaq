/* This class is used as a helper function in other classes. 
This class allows for a timer that can be recreated giving a more modular structure to our code */
export class Timer{
    currentTime:number;
    timerId:any;
    constructor(){
        this.currentTime =0;
    }
    /* Start the timer
    every 1 second the count is incremented */
    startTime(){
        this.timerId = window.setInterval(() => {
         
           this.currentTime += 1;
        },1000);
    }
    /* Clears the timers by removing the id and setting the time back to zero */
    stopTime(){
        clearInterval(this.timerId);
        this.currentTime = 0;
    }

    getTime(){
        return this.currentTime;
    }
}
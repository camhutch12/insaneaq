import {Timer} from '../util/timer.ts'
export const timer_reducer = (oldTimer={},action) => {
    if(action.type === "CREATE_TIMER"){
        oldTimer = action.payload.timer
        return oldTimer
    }
    else if(action.type === "RESET"){
        oldTimer = {};
        oldTimer = new Timer();
        return oldTimer
    }
    return oldTimer
}
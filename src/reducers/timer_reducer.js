/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
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
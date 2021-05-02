
import { Snail } from '../model/snail'
import { randomNumber, CONSTANTS } from "../util/utilities";



export const snail_reducer = (oldSnailList=[
    new Snail(randomNumber(250, window.innerHeight - 250),randomNumber(100, window.innerHeight - 200)),
   
  
],action) => {
    if(action.type === "CREATE_SNAIL"){
        
        return [...oldSnailList,action.payload.snail]
    }

    else if(action.type === "RESET"){
        
        oldSnailList= [new Snail(Math.floor((Math.random() * (window.innerWidth-100))+100),
            (window.innerHeight-100) / 1.3 + Math.floor(Math.random() * ((window.innerHeight-100) / 6)))]
    }
    return [...oldSnailList]
}


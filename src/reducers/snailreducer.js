
import { Snail } from '../model/snail'



export const snail_reducer = (oldSnailList=[
    new Snail(Math.floor((Math.random() * document.documentElement.clientWidth)),
    (window.innerHeight-100) / 1.3 + Math.floor(Math.random() * ((window.innerHeight-100) / 6))),
   
  
],action) => {
    if(action.type === "CREATE_SNAIL"){
        
        return [...oldSnailList,action.payload.snail]
    }

    else if(action.type === "RESET"){
        
        oldSnailList= [new Snail(Math.floor((Math.random() * document.documentElement.clientWidth)),
            (window.innerHeight-100) / 1.3 + Math.floor(Math.random() * ((window.innerHeight-100) / 6)))]
    }
    return [...oldSnailList]
}



import { Snail } from '../model/snail'



export const snail_reducer = (oldSnailList=[
    new Snail(Math.floor((Math.random() * document.documentElement.clientWidth)),
    document.documentElement.clientHeight / 1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight / 6))),
   
  
],action) => {
    if(action.type === "CREATE_SNAIL"){
        
        return [...oldSnailList,action.payload.snail]
    }
    return oldSnailList
}


import { SwordFish } from "../model/swordfish";

export const swordFish_reducer = (oldSwordFishList=[
    new SwordFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),
  
],action) => {
    if(action.type === "CREATE_SWORDFISH"){
        
        return [...oldSwordFishList,action.payload.swordFish]
    }else if(action.type ==="DELETE_SWORDFISH"){
        
        oldSwordFishList = oldSwordFishList.filter((ele,index) => action.payload.swordFish.id !== ele.id );
        return oldSwordFishList
    }

    else if(action.type ==="RESET_SWORDFISH"){
        oldSwordFishList = [
            new SwordFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),
    
        ]
        
        return [...oldSwordFishList]
    }
    return oldSwordFishList
}
import { Seahorse } from "../model/seahorse";

export const seahorse_reducer = (oldSeahorseList=[
    new Seahorse(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),

  
],action) => {
    if(action.type === "CREATE_SEAHORSE"){
        
        return [...oldSeahorseList,action.payload.seahorse]
    }else if(action.type ==="DELETE_SEAHORSE"){
        
        oldSeahorseList = oldSeahorseList.filter((ele,index) => action.payload.seahorse.id !== ele.id );
        return oldSeahorseList
    }

    else if(action.type ==="RESET_SEAHORSE"){
        oldSeahorseList = [
            new Seahorse(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100))))
        ]
        
        return [...oldSeahorseList]
    }
    return oldSeahorseList
}
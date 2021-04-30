import { Seahorse } from "../model/seahorse";
import {randomNumber} from '../util/utilities'
export const seahorse_reducer = (oldSeahorseList=[
    new Seahorse(randomNumber(100,window.innerWidth-200),randomNumber(200,window.innerHeight-200))

  
],action) => {
    if(action.type === "CREATE_SEAHORSE"){
        
        return [...oldSeahorseList,action.payload.seahorse]
    }else if(action.type ==="DELETE_SEAHORSE"){
        
        oldSeahorseList = oldSeahorseList.filter((ele,index) => action.payload.seahorse.id !== ele.id );
        return oldSeahorseList
    }

    else if(action.type ==="RESET_SEAHORSE"){
        oldSeahorseList = [
            new Seahorse(randomNumber(200,window.innerWidth-200),randomNumber(200,window.innerHeight-200))
        ]
        
        return [...oldSeahorseList]
    }
    return oldSeahorseList
}
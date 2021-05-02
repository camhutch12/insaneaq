/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import { Seahorse } from "../model/seahorse";
import {randomNumber,CONSTANTS} from '../util/utilities'
export const seahorse_reducer = (oldSeahorseList=[
    new Seahorse( randomNumber(100, CONSTANTS.MAXX),
    randomNumber(100, CONSTANTS.MAXY))

  
],action) => {
    if(action.type === "CREATE_SEAHORSE"){
        
        return [...oldSeahorseList,action.payload.seahorse]
    }else if(action.type ==="DELETE_SEAHORSE"){
        
        oldSeahorseList = oldSeahorseList.filter((ele,index) => action.payload.seahorse.id !== ele.id );
        return oldSeahorseList
    }

    else if(action.type ==="RESET_SEAHORSE"){
        oldSeahorseList = [
            new Seahorse( randomNumber(100, CONSTANTS.MAXX),
            randomNumber(100, CONSTANTS.MAXY))
        ]
        return [...oldSeahorseList]
    }
    return oldSeahorseList
}
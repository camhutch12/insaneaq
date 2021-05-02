/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import { Pearl } from '../model/Pearl'
import {Clam} from '../model/clam'
interface action{
    type:String,
    payload:
    {
        pearl:Clam|Pearl
    },

}
export const pearl_reducer = (oldPearlList:Pearl[]=[],action:action) => {
    if(action.type === "CREATE_PEARL"){
        let {x,y} = action.payload.pearl
        return [...oldPearlList,new Pearl(x,y)]
    }else if(action.type ==="DELETE_PEARL"){
        
        oldPearlList = oldPearlList.filter((ele) => action.payload.pearl.id !== ele.id );
        return [...oldPearlList]
    }

    else if(action.type ==="RESET_PEARL"){
        
       oldPearlList = []
        return [...oldPearlList]
    }
    return oldPearlList
}
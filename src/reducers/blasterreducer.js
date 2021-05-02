
/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {Blaster} from '../model/blaster'
export const blaster_reducer = (oldBlasterList=[],action) => {
    if(action.type === "CREATE_BLASTER"){
        let {x,y} = action.payload.blaster
        
        return [...oldBlasterList,new Blaster(x,y)]
    }
    else if(action.type ==="DELETE_BLASTER"){
        
        oldBlasterList = oldBlasterList.filter((ele,index) => action.payload.blaster.id !== ele.id );
        return oldBlasterList
    }

    else if(action.type ==="RESET"){
        oldBlasterList = [];
        return oldBlasterList
    }
    return oldBlasterList
}

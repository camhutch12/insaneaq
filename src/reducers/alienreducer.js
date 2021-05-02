/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {Alien} from '../model/alien'
export const alien_reducer = (oldAlienList=[],action) => {
    /* Creates a alien  */
    if(action.type === "CREATE_ALIEN"){  
        
        let {x,y,type} = action.payload.alien
        const alien = new Alien(x,y,type)
        return [...oldAlienList,alien]
       
    }else if(action.type ==="DELETE_ALIEN"){
        
        oldAlienList = oldAlienList.filter((ele,index) => action.payload.alien.id !== ele.id );
        return oldAlienList
    }

    else if(action.type ==="RESET"){
        oldAlienList = []
        return oldAlienList
    }


    return oldAlienList;
}
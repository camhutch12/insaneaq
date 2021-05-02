/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {Carnivore} from '../model/carnivore'

export const carnivore_reducer = (oldCarnivoreList=[
],action) => {
    if(action.type === "CREATE_CARNIVORE"){
        
        return [...oldCarnivoreList,action.payload.carnivore]
    }else if(action.type ==="DELETE_CARNIVORE"){
        
        oldCarnivoreList = oldCarnivoreList.filter((ele,index) => action.payload.carnivore.id !== ele.id );
        return oldCarnivoreList
    }

    else if(action.type ==="RESET_CARNIVORE"){
        oldCarnivoreList = []
        return [...oldCarnivoreList]
    }
    return oldCarnivoreList
}

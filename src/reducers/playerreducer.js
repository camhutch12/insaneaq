/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import { Player } from '../model/player'
export const player_reducer = (oldPlayerList=[],action) => {
    if(action.type === "CREATE_PLAYER"){
        return [...oldPlayerList,action.payload.player]
    }
    else if(action.type === "DELETE_PLAYER"){
        oldPlayerList = oldPlayerList.filter((ele,index) => action.payload.player.id !== ele.id );
        return oldPlayerList
    }

    else if(action.type === "RESET"){
        oldPlayerList = []
        return [...oldPlayerList]
    }
    return oldPlayerList
}



import { Player } from '../model/player'



export const player_reducer = (oldPlayerList=[],action) => {
    if(action.type === "CREATE_PLAYER"){
        return [...oldPlayerList,action.payload.player]
    }
    else if(action.type === "DELETE_PLAYER"){
        oldPlayerList = oldPlayerList.filter((ele,index) => action.payload.player.id !== ele.id );
        return oldPlayerList
    }
    return oldPlayerList
}


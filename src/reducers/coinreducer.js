/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {Coin} from '../model/coin'

export const coin_reducer = (oldCoinList=[],action) => {
    if(action.type === "CREATE_COIN"){
        let {x,y,type} = action.payload.coin
        return [...oldCoinList,new Coin(x,y,type)]
    }else if(action.type ==="DELETE_COIN"){
        
        oldCoinList = oldCoinList.filter((ele) => action.payload.coin.id !== ele.id );
        return [...oldCoinList]
    }

    else if(action.type ==="RESET"){
        
       oldCoinList = []
        return [...oldCoinList]
    }
    return oldCoinList
}

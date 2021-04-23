import {combineReducers} from 'redux'
import {Coin} from '../model/coin'

export const coin_reducer = (oldCoinList=[],action) => {
    if(action.type === "CREATE_COIN"){
        let {x,y,type} = action.payload.coin
        return [...oldCoinList,new Coin(x,y,type)]
    }else if(action.type ==="DELETE_COIN"){
        
        oldCoinList = oldCoinList.filter((ele,index) => action.payload.coin.id !== ele.id );
        return oldCoinList
    }
    return oldCoinList
}

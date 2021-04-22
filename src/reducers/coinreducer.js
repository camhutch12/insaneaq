import {combineReducers} from 'redux'
import {Coin} from '../model/coin'

export const coin_reducer = (oldCoinList=[],action) => {
    if(action.type === "CREATE_COIN"){
        let {x,y} = action.payload.coin
        return [...oldCoinList,new Coin(x,y)]
    }
    return oldCoinList
}

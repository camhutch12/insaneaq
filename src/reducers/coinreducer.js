import {combineReducers} from 'redux'
import {Coin} from '../model/Coin'

export const coin_reducer = (oldCoinList=[],action) => {
    if(action.type === "CREATE_COIN"){
        
        return [...oldCoinList,action.payload.coin]
    }
    return oldCoinList
}

import {combineReducers} from 'redux'
import {GoldFish} from '../model/Goldfish'

const fish_reducer = (oldFishList=[
    new GoldFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * document.documentElement.clientHeight))),
    new GoldFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * document.documentElement.clientHeight))),
    new GoldFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * document.documentElement.clientHeight))),
  
],action) => {
    if(action.type === "CREATE_FISH"){
        
        return [...oldFishList,action.payload.fish]
    }
    return oldFishList
}

export default combineReducers({
    fish_reducer:fish_reducer,
});
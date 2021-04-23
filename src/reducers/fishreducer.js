import {combineReducers} from 'redux'
import {GoldFish} from '../model/Goldfish'

export const fish_reducer = (oldFishList=[
    new GoldFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),
    new GoldFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),
    new GoldFish(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),
  
],action) => {
    if(action.type === "CREATE_FISH"){
        
        return [...oldFishList,action.payload.fish]
    }else if(action.type ==="DELETE_FISH"){
        
        oldFishList = oldFishList.filter((ele,index) => action.payload.fish.id !== ele.id );
        return oldFishList
    }
    return oldFishList
}

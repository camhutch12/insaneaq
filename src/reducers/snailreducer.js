import {combineReducers} from 'redux'
import { Snail } from '../model/snail'

export const snail_reducer = (oldFishList=[
    new Snail(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * document.documentElement.clientHeight))),
   
  
],action) => {
    if(action.type === "CREATE_FISH"){
        
        return [...oldFishList,action.payload.fish]
    }
    return oldFishList
}


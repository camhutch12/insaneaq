import {combineReducers} from 'redux'
import {Alien} from '../model/alien'

export const alien_reducer = (oldAlienList=[],action) => {
    if(action.type === "CREATE_ALIEN"){
        if(action.payload.alien === 1){
            const alien = new Alien(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100))))
        
        return [...oldAlienList,alien]
        }
    }else if(action.type ==="DELETE_ALIEN"){
        
        oldAlienList = oldAlienList.filter((ele,index) => action.payload.alien.id !== ele.id );
        return oldAlienList
    }

    else if(action.type ==="RESET"){
        oldAlienList = []
        
        return oldAlienList
    }


    return oldAlienList;
}
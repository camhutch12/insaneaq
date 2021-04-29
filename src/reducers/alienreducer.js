import {combineReducers} from 'redux'
import {Alien} from '../model/alien'

export const alien_reducer = (oldAlienList=[],action) => {
    if(action.type === "CREATE_ALIEN"){  
            let {x,y} = action.payload.alien
            const alien = new Alien(x,y)
        return [...oldAlienList,alien]
        
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
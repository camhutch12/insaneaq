import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
import {combineReducers} from 'redux'
import {Crumb} from '../model/crumb'

export const crumb_reducer = (oldCrumbList=[],action) => {
    if(action.type === "CREATE_CRUMB"){
        let {x,y} = action.payload.crumb
        return [...oldCrumbList,new Crumb(x,y)]
    }
    else if(action.type ==="DELETE_CRUMB"){
        
        oldCrumbList = oldCrumbList.filter((ele,index) => action.payload.crumb.id !== ele.id );
        return oldCrumbList
    }

    else if(action.type ==="RESET"){
        oldCrumbList = [];
        return oldCrumbList
    }
    return oldCrumbList
}

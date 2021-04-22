import { act } from 'react-dom/cjs/react-dom-test-utils.production.min'
import {combineReducers} from 'redux'
import {Crumb} from '../model/crumb'

export const crumb_reducer = (oldCrumbList=[],action) => {
    if(action.type === "CREATE_CRUMB"){
        let {x,y} = action.payload.crumb
        console.log(x,y)
        console.log(oldCrumbList)
        return [...oldCrumbList,new Crumb(x,y)]
    }
    return oldCrumbList
}

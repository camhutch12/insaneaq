import {combineReducers} from 'redux'
import {Text} from '../model/text'

export const text_reducer = (oldTextList=[],action) => {
    if(action.type === "CREATE_TEXT"){
        
        const text = new Text(window.innerWidth/2,window.innerHeight-200)
        return [...oldTextList,text]
        
    }else if(action.type ==="DELETE_TEXT"){
        
        oldTextList = oldTextList.filter((ele,index) => action.payload.text.id !== ele.id );
        return oldTextList
    }

    else if(action.type ==="RESET_TEXT"){
        oldTextList = []
        
        return oldTextList
    }


    return oldTextList;
}
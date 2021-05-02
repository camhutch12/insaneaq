
import {Text} from '../model/text'
import {CONSTANTS} from '../util/utilities'

export const text_reducer = (oldTextList=[],action) => {
    if(action.type === "CREATE_TEXT"){
    
        const text = new Text(window.innerWidth/2,CONSTANTS.MAXY)
        return [...oldTextList,text]
        
    }else if(action.type === "DELETE_TEXT"){
        
        oldTextList = oldTextList.filter((ele,index) => action.payload.text.id !== ele.id );
        return [...oldTextList]
    }

    else if(action.type ==="RESET_TEXT"){
        oldTextList = []
        
        return oldTextList
    }


    return oldTextList;
}
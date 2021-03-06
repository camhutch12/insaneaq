/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {Crumb} from '../model/crumb'
export const crumb_reducer = (oldCrumbList=[],action) => {
    if(action.type === "CREATE_CRUMB"){
        let {x,y,isSeahorse} = action.payload.crumb
        let crumb
        if(isSeahorse){
             crumb = new Crumb(x,y,2)
        }
        else{
            if(Crumb.level >= 3){
                 crumb = new Crumb(x,y,3)
            }
            else if(Crumb.level == 2){
                 crumb = new Crumb(x,y,2)
                
            }else{
                 crumb = new Crumb(x,y,1)
    
            }
        }
        
        return [...oldCrumbList,crumb]
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

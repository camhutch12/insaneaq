/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */


 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import { Clam } from "../model/clam"
import {CONSTANTS,randomNumber} from '../util/utilities'
export const clam_reducer = (oldClamList=[
    new Clam(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),CONSTANTS.MAXY-100)
],action) => {
    if(action.type === "CREATE_CLAM"){
        
        return [...oldClamList,action.payload.clam]
    }

    else if(action.type === "RESET"){
        
        oldClamList= [new Clam(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),CONSTANTS.MAXY-100)]
    }
    return [...oldClamList]
}
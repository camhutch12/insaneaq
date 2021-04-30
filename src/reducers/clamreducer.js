import { Clam } from "../model/clam"
import {CONSTANTS,randomNumber} from '../util/utilities'
export const clam_reducer = (oldClamList=[
    new Clam(randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX),CONSTANTS.MAXY-15)
   
  
],action) => {
    if(action.type === "CREATE_CLAM"){
        
        return [...oldClamList,action.payload.clam]
    }

    else if(action.type === "RESET"){
        
        oldClamList= [new Clam(Math.floor((Math.random() * window.innerWidth)),
            (window.innerHeight-100) / 1.3 + Math.floor(Math.random() * ((window.innerHeight-100) / 6)))]
    }
    return [...oldClamList]
}
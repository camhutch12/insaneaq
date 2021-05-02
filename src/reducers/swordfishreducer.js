import { SwordFish } from "../model/swordfish";
import { randomNumber, CONSTANTS } from "../util/utilities";


export const swordFish_reducer = (oldSwordFishList=[
    new SwordFish(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY))

  ],action) => {
    if(action.type === "CREATE_SWORDFISH"){
        
        return [...oldSwordFishList,action.payload.swordFish]
    }else if(action.type ==="DELETE_SWORDFISH"){
        
        oldSwordFishList = oldSwordFishList.filter((ele,index) => action.payload.swordFish.id !== ele.id );
        return oldSwordFishList
    }

    else if(action.type ==="RESET_SWORDFISH"){
        oldSwordFishList = [
        new SwordFish(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY))]
        
        return [...oldSwordFishList]
    }
    return oldSwordFishList
}
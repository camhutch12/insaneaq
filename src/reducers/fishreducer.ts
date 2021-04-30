import { GoldFish } from "../model/Goldfish";
import { randomNumber, CONSTANTS } from "../util/utilities";

export const fish_reducer = ( oldFishList:GoldFish[] = [
        new GoldFish(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY)),
        new GoldFish(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY))
    ],action:any
) => {
    if (action.type === "CREATE_FISH") {
        return [...oldFishList, action.payload.fish];
    }
     else if (action.type === "DELETE_FISH") {
        oldFishList = oldFishList.filter((ele, index) => action.payload.fish.id !== ele.id);
        return oldFishList;
    } 
    else if (action.type === "CLEAR_FISH") {
        oldFishList = [];
        return oldFishList;
    } 
    else if (action.type === "RESET_FISH") {
        oldFishList = [
            new GoldFish(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX), randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY)),
            new GoldFish(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX), randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY))
        ];

        return [...oldFishList];
    }
    return oldFishList;
}


/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
import { GoldFish } from "../model/Goldfish"
export const createFish = (fish:GoldFish) => {
    return {
        type:'CREATE_FISH',
        payload:{
            fish
        }
    }
}

export const deleteFish = (fish:GoldFish) => {
    return {
        type:'DELETE_FISH',
        payload:{
            fish
        }
    }
}

export const resetFish = (fish:GoldFish) => {
    return {
        type:'RESET_FISH',
        payload:{
            fish
        }
    }
}

export const clearFish = (fish:GoldFish) => {
    return {
        type:'CLEAR_FISH',
        payload:{
            fish
        }
    }
}
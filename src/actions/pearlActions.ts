import { Clam } from "../model/clam"
import { Pearl } from "../model/Pearl"

export const createPearl = (pearl:Clam) => {
    return {
        type:'CREATE_PEARL',
        payload:{
            pearl
        }
    }
}

export const deletePearl = (pearl:Pearl) =>  {
    return {
        type:'DELETE_PEARL',
        payload: {
            pearl:pearl
        }
    }   
}


export const resetPearl = (pearl:Pearl) =>  {
    return {
        type:'RESET_PEARL',
        payload: {
            pearl:pearl
        }
    }   
}
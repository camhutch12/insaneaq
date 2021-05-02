/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createSwordFish = swordFish => {
    return {
        type:'CREATE_SWORDFISH',
        payload:{
            swordFish
        }
    }
}

export const deleteSwordFish = swordFish => {
    return {
        type:'DELETE_SWORDFISH',
        payload:{
            swordFish
        }
    }
}

export const resetSwordFish = swordFish => {
    return {
        type:'RESET_SWORDFISH',
        payload:{
            swordFish
        }
    }
}
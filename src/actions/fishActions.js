export const createFish = fish => {
    return {
        type:'CREATE_FISH',
        payload:{
            fish
        }
    }
}

export const deleteFish = fish => {
    return {
        type:'DELETE_FISH',
        payload:{
            fish
        }
    }
}
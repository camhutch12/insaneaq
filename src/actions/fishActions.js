export const createFish = fish => {
    return {
        type:'CREATE_FISH',
        payload:{
            fish
        }
    }
}

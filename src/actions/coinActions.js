
/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

export const createCoin = coin => {
    return {
        type:'CREATE_COIN',
        payload:{
            coin
        }
    }
}

export const deleteCoin = coin =>  {
    return {
        type:'DELETE_COIN',
        payload: {
            coin:coin
        }
    }   
}


export const resetCoin = coin =>  {
    return {
        type:'RESET',
        payload: {
            coin:coin
        }
    }   
}
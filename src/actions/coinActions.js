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
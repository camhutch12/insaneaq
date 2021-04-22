export const createCoin = coin => {
    return {
        type:'CREATE_COIN',
        payload:{
            coin
        }
    }
}

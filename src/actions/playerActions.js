export const createPlayer = player => {
    return {
        type:'CREATE_PLAYER',
        payload:{
            player:player
        }
    }
}

export const deletePlayer = player => {
    return {
        type:'DELETE_PLAYER',
        payload:{
            player
        }
    }
}
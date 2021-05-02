/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
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

export const resetPlayer = player => {
    return {
        type:'RESET',
        payload:{
            player
        }
    }
}
export const createTimer = timer => {
    return {
        type:'CREATE_TIMER',
        payload:{
            timer
        }
    }
}

export const deleteTimer = timer =>  {
    return {
        type:'DELETE_TIMER',
        payload: {
            timer:timer
        }
    }   
}

export const resetTimer = timer =>  {
    return {
        type:'RESET',
        payload: {
            timer:timer
        }
    }   
}
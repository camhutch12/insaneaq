/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createBlaster = blaster => {
    return {
        type:'CREATE_BLASTER',
        payload:{
            blaster
        }
    }
}

export const deleteBlaster = blaster =>  {
    return {
        type:'DELETE_BLASTER',
        payload: {
            blaster:blaster
        }
    }   
}

export const resetBlaster = blaster =>  {
    return {
        type:'RESET',
        payload: {
            blaster:blaster
        }
    }   
}
/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createPreggo = preggo => {
    return {
        type:'CREATE_PREGGO',
        payload:{
            preggo
        }
    }
}

export const deletePreggo = preggo => {
    return {
        type:'DELETE_PREGGO',
        payload:{
            preggo
        }
    }
}

export const resetPreggo = preggo => {
    return {
        type:'RESET_PREGGO',
        payload:{
            preggo
        }
    }
}
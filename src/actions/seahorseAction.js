/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createSeahorse = seahorse => {
    return {
        type:'CREATE_SEAHORSE',
        payload:{
            seahorse
        }
    }
}

export const deleteSeahorse = seahorse => {
    return {
        type:'DELETE_SEAHORSE',
        payload:{
            seahorse
        }
    }
}

export const resetSeahorse = seahorse => {
    return {
        type:'RESET_SEAHORSE',
        payload:{
            seahorse
        }
    }
}
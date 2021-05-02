/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createClam = clam => {
    return {
        type:'CREATE_CLAM',
        payload:{
            clam
        }
    }
}

export const deleteClam = clam => {
    return {
        type:'DELETE_CLAM',
        payload:{
            clam
        }
    }
}

export const resetClam = clam => {
    return {
        type:'RESET_CLAM',
        payload:{
            clam
        }
    }
}
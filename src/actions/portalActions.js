/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createPortal = portal => {
    return {
        type:'CREATE_PORTAL',
        payload:{
            portal
        }
    }
}

export const deletePortal = portal => {
    return {
        type:'DELETE_PORTAL',
        payload:{
            portal
        }
    }
}

export const resetPortal = portal => {
    return {
        type:'RESET_PORTAL',
        payload:{
            portal
        }
    }
}
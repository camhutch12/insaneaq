/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const createCrumb = crumb => {
    return {
        type:'CREATE_CRUMB',
        payload:{
            crumb
        }
    }
}

export const deleteCrumb = crumb =>  {
    return {
        type:'DELETE_CRUMB',
        payload: {
            crumb:crumb
        }
    }   
}

export const resetCrumb = crumb =>  {
    return {
        type:'RESET',
        payload: {
            crumb:crumb
        }
    }   
}
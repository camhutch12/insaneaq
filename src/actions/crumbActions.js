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
export const createCrumb = crumb => {
    return {
        type:'CREATE_CRUMB',
        payload:{
            crumb
        }
    }
}

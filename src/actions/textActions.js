export const createText = text => {
    return {
        type:'CREATE_TEXT',
        payload:{
            text
        }
    }
}

export const deleteText = text => {
    return {
        type:'DELETE_TEXT',
        payload:{
            text
        }
    }
}

export const resetText = text => {
    return {
        type:'RESET_TEXT',
        payload:{
            text
        }
    }
}
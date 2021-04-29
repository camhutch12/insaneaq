export const createCarnivore = carnivore => {
    return {
        type:'CREATE_CARNIVORE',
        payload:{
            carnivore
        }
    }
}

export const deleteCarnivore = carnivore => {
    return {
        type:'DELETE_CARNIVORE',
        payload:{
            carnivore
        }
    }
}

export const resetCarnivore = carnivore => {
    return {
        type:'RESET_CARNIVORE',
        payload:{
            carnivore
        }
    }
}
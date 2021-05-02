/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
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
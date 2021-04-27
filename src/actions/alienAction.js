export const createAlien = alien => {
    return {
        type:'CREATE_ALIEN',
        payload:{
            alien
        }
    }
}

export const deleteAlien = alien => {
    return {
        type:'DELETE_ALIEN',
        payload:{
            alien
        }
    }
}

/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
/* Creates a new Alien */
import {Alien} from '../model/alien'
export const createAlien = (alien:Alien) => {
    return {
        type:'CREATE_ALIEN',
        payload:{
            alien
        }
    }
}

export const deleteAlien = (alien:Alien) => {
    return {
        type:'DELETE_ALIEN',
        payload:{
            alien
        }
    }
}

export const resetAlien = (alien:Alien) => {
    return {
        type:'RESET',
        payload:{
            alien
        }
    }
}
/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */
export const coordinatesAction = coords => {
   return{ type:'GET_MOUSE_POS',
    payload:{
        coords
    }
    }
}
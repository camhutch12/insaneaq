export const coordinatesAction = coords => {
   return{ type:'GET_MOUSE_POS',
    payload:{
        coords
    }
    }
}
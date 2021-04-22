
export const util_reducer = (coord=null,action) => {
    if(action.type === "GET_MOUSE_POS"){
    return action.playload.coord
    }
    return coord

}

/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
export const util_reducer = (coord=null,action) => {
    if(action.type === "GET_MOUSE_POS"){
    return action.playload.coord
    }
    return coord

}
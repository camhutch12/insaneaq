/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import {Portal} from '../model/portal'

export const portal_reducer = (oldPortalList=[],action) => {
    if(action.type === "CREATE_PORTAL"){
        let {x,y} = action.payload.portal
        const portal = new Portal(x,y)

        return [...oldPortalList,portal]
    }else if(action.type ==="DELETE_PORTAL"){
        
        oldPortalList = oldPortalList.filter((ele,index) => action.payload.portal.id !== ele.id );
        return oldPortalList
    }

    else if(action.type ==="RESET_PORTAL"){
        oldPortalList = []
        
        return oldPortalList
    }


    return oldPortalList;
}
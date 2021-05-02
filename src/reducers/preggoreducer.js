/*
 reference https://redux.js.org/tutorials/essentials/part-1-overview-concepts
 
 */

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/
import { Preggo } from "../model/preggo";
import { randomNumber,CONSTANTS } from "../util/utilities";
export const preggo_reducer = (
    oldPreggoList = [
        new Preggo(
            randomNumber(100, CONSTANTS.MAXX),
            randomNumber(100, CONSTANTS.MAXY)
        ),
    ],
    action
) => {
    if (action.type === "CREATE_PREGGO") {
        return [...oldPreggoList, action.payload.preggo];
    } else if (action.type === "DELETE_PREGGO") {
        oldPreggoList = oldPreggoList.filter(
            (ele, index) => action.payload.preggo.id !== ele.id
        );
        return oldPreggoList;
    } else if (action.type === "RESET_PREGGO") {
        oldPreggoList = [
            new Preggo(
                randomNumber(100, CONSTANTS.MAXX),
            randomNumber(100, CONSTANTS.MAXY)
            ),
        ];

        return [...oldPreggoList];
    }
    return oldPreggoList;
};

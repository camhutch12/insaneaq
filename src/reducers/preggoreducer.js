import { Preggo } from "../model/preggo";
import { randomNumber } from "../util/utilities";
export const preggo_reducer = (
    oldPreggoList = [
        new Preggo(
            randomNumber(100, window.innerWidth - 200),
            randomNumber(100, window.innerHeight - 200)
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
                randomNumber(100, window.innerWidth - 200),
                randomNumber(100, window.innerHeight - 200)
            ),
        ];

        return [...oldPreggoList];
    }
    return oldPreggoList;
};

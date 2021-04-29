import {Preggo} from '../model/preggo'
export const preggo_reducer = (oldPreggoList=[
    new Preggo(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),
    
  
],action) => {
    if(action.type === "CREATE_PREGGO"){
        
        return [...oldPreggoList,action.payload.preggo]
    }else if(action.type ==="DELETE_PREGGO"){
        
        oldPreggoList = oldPreggoList.filter((ele,index) => action.payload.preggo.id !== ele.id );
        return oldPreggoList
    }

    else if(action.type ==="RESET_PREGGO"){
        oldPreggoList = [
            new Preggo(Math.floor((Math.random() * document.documentElement.clientWidth)),Math.floor((Math.random() * (window.innerHeight-100)))),

        ]
        
        return [...oldPreggoList]
    }
    return oldPreggoList
}
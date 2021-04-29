import { Clam } from "../model/clam"

export const clam_reducer = (oldClamList=[
    new Clam(Math.floor((Math.random() * document.documentElement.clientWidth)),
    (window.innerHeight-100) / 1.3 + Math.floor(Math.random() * ((window.innerHeight-100) / 6))),
   
  
],action) => {
    if(action.type === "CREATE_CLAM"){
        
        return [...oldClamList,action.payload.clam]
    }

    else if(action.type === "RESET"){
        
        oldClamList= [new Clam(Math.floor((Math.random() * document.documentElement.clientWidth)),
            (window.innerHeight-100) / 1.3 + Math.floor(Math.random() * ((window.innerHeight-100) / 6)))]
    }
    return [...oldClamList]
}
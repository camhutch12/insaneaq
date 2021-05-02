import { useState,useEffect } from 'react';
import classes from './charselection.module.css'
import ImgContainer from './imgcontainer'



const CharacterSelection = ({unlockablePets,onClick,...props}) => {

let chosen;
let [chosenState,setChosenState] = useState(false);
useEffect(() => {
    setChosenState(true)
    return () => {
        setChosenState(true)
    }
}, [chosenState])
const selected = (e) => {
    console.log(e.target);
    // get item from array
    let count = unlockablePets.filter((ele) => ele.chosen === true).length;
    console.log(count)
    unlockablePets.forEach(element => {
        setChosenState(true);
        if(e.target.id === element.id){
            if(element.chosen === false && count<3){
                element.chosen = true;
            }
            else if(element.chosen === true){
                element.chosen = false
            }
            
        }
        setChosenState(false);
    });
  }
    
    // check if true
    // if not make true
    // if already true make false.
    // if 3 are already selected as true
    // remove first index for current cicked


    const unlockable = unlockablePets.map((element,index) => {
        if(element.level <= props.currentLevel){
            return (<ImgContainer id={element.id} key={index} element={element} onclick={selected} ch={true} />)
        }
    })
    
    

    chosen = unlockablePets.filter((ele,index) => ele.chosen ).map((ele,index) => <ImgContainer id={ele.id} key={index} element={ele} label={ele.label} ch={false}/>)

    return (
        
        <div className={classes.char__container}>
            <div className={classes.title__container}>
            <h1> select you characters</h1>
            </div>
            <div className={classes.row}>
            {unlockable}
            </div>
            <div className={`${classes.row} ${classes.subtitle__container}`}>
                <h2>Chosen Pets</h2>
            </div>
            <div className={classes.row}>
                {chosen}
            </div>
            <button className={classes.btn} onClick={onClick}> Go To Next Level</button>
        </div>
        
    )
}

export default CharacterSelection

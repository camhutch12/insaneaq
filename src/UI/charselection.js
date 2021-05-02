import { useState,useEffect } from 'react';
import classes from './charselection.module.css'
import ImgContainer from './imgcontainer'


/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/* This function returns a React component Which allows for the user to make changes and select different characters
after every level has been completed of a gameover has occured */
const CharacterSelection = ({unlockablePets,onClick,...props}) => {

let chosen;
let [chosenState,setChosenState] = useState(false); // boolean which is mainly used to allow for a rerender to occur on the component

/* Helper function for allowing a rerender to occur when ever the chosen state has changed
this is a useEffect hook  */
useEffect(() => {
    setChosenState(true)
    return () => {
        setChosenState(true)
    }
}, [chosenState]);

/* checks if a pet has been selected or not 
if a pet is selected set the pet chosen to true
when a user unselects that pet chosen to false.
this will only change the pet that was clicked on by the user */
const selected = (e) => {
    console.log(e.target);
    // get item from array
    let count = unlockablePets.filter((ele) => ele.chosen === true).length; // filter the list to only elements chosen get the length
    // loop though all elements
    unlockablePets.forEach(element => {
        
        setChosenState(true);
        // check if clicked
        if(e.target.id === element.id){
            // if 3 are not already selected and is false
            if(element.chosen === false && count<3){
                element.chosen = true;
            }
            // if already true make false.
            else if(element.chosen === true){
                element.chosen = false
            }
            
        }
        setChosenState(false); // creates the useEffect hook to get called and a rerendering to occur
    });
  }
    
   
    // maps each value in the array of objects to a react component 
    /* Each React component contains id,key,element and the selected function  */
    const unlockable = unlockablePets.map((element,index) => {
        if(element.level <= props.currentLevel){
            return (<ImgContainer id={element.id} key={index} element={element} onclick={selected} ch={true} />)
        }
    })
    
    
    /* Filters the array into a array which only contains elements that the user has selected.  */
    chosen = unlockablePets.filter((ele,index) => ele.chosen ).map((ele,index) => <ImgContainer id={ele.id} key={index} element={ele} label={ele.label} ch={false}/>)
    /* Renders a react componenet which contins this structure to the DOM */
    return (
        
        <div className={classes.char__container}>
            <div className={classes.title__container}>
            <h1>Select Your Characters</h1>
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

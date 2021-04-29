
import React, { useEffect, useState } from 'react'
import classes from './levelup.module.css';

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a simple button that registers whether the user has clicked. 
If the button is clicked a boolean returns true in the callback, which starts the game
*/
const LevelUp = ({onClick,...props}) => {

    return (

        <div className={classes.levelup__container}>
            <h1 className={classes.levelup__title}>Level Complete</h1>
            <h2 className={classes.levelup__titlesub}>You unlocked The Snail</h2>
            <img src='../assets/background/snail.svg'></img>
            <button className={classes.levelup__button} onClick={onClick}>Next Level</button>
        </div>
    )
}

export default LevelUp
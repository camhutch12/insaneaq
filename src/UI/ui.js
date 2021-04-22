
import React, { useEffect, useState } from 'react'
import styles from '../style.module.css';

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a simple button that registers whether the user has clicked. 
If the button is clicked a boolean returns true in the callback, which starts the game
*/
const UI = ({onClick}) => {

    return (

        <div class={styles.homeScreen}>
            
            <div class={styles.instruct}>
                <div class={styles.instructions}>
                    <img src="../../assets/fish/fish.svg" width="100px"></img>
                    <div class={styles.lab}>
                        <label class={styles.lab}>Feed Me</label>
                    </div>
                    
                </div>

                <div class={styles.instructions}>
                    <img src="../../assets/background/alien.svg" width="100px"></img>
                    <div class={styles.lab}>
                        <label class={styles.lab}>Fear Me</label>
                    </div>
                    
                </div>

                <div class={styles.instructions}>
                    <img src="../../assets/upgrades/egg.svg" width="100px"></img>
                    <div class={styles.lab}>
                    <label >Find Me</label>
                    </div>
                    
                </div>
            </div>
            <div class={styles.buttonParent}>
                <button class={styles.startButton} onClick={onClick}>
                    Start Game
                </button>
            </div>
            
        </div>
    )
}

export default UI
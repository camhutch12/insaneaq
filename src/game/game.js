
import React, { useEffect, useState } from 'react'
import { Stage, Sprite, Graphics, useApp, Container, render } from '@inlet/react-pixi';
import Background from '../background/background'
import Crumb from '../drops/crumb'
import Snail from '../Fish/snail/snail';
import GoldFish from '../Fish/goldfish/goldfish';
import styles from '../style.module.css';
import {GoldFish as GL} from '../model/Goldfish';
import {connect} from 'react-redux'
import {createSnail} from '../actions/snailActions'
import {createFish} from '../actions/fishActions'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is embedded in the pixi.js Stage container,
which holds all of the games components (background, fish, food, etc),
and mouse click coordinates are passed in from the App.js and are passed to
sub comnponents
*/





const Game = ({background,SCREEN_SIZE,...props}) => {



    const [locationMouseClick, setlocationMouseClick] = useState({ x: null, y: null });
    const [hasClicked, setHasClicked] = useState(false);

    //const update = (e) => setlocationMouseClick({ x: e.clientX, y: e.clientY });

    const getClick = (event) => {
        locationMouseClick.y = event.clientY;
        setHasClicked(true)
        setlocationMouseClick({x:event.clientX,y:event.clientY})
       console.log(locationMouseClick)
    //    return locationMouseClick;
    }


    // useEffect(() => {
    //     document.body.addEventListener('click', (e) => {
    //         setHasClicked(true);
    //         console.log({x:e.clientX,y:e.clientY})
    //         setlocationMouseClick( (e) => {
    //        return {x:e.clientX,y:e.clientY}
                
    //         })
            
    //     });
    //     // console.log(locationMouseClick)
    // }, [locationMouseClick])



    const fish = props.fish.map((ele,index) => <GoldFish key={index} {...ele}/>)
    const snail = props.snail.map((ele,index) => <Snail key={index} {...ele}/>)
    const guppyCost = 100;
    const foodQuantity = 1;
    const foodQuantCost = 100;
    const foodUpgradeCost = 200;
    const bigFishCost = 1000;
    const gunCost = 1000;
    const eggCost = 750;
    const money = 0;
    
    return (
            <React.Fragment>   
                <div class={styles.navbar}>
                    <button 
                     class={styles.button}
                     onClick={() => props.createFish(new GL(Math.floor((Math.random() * SCREEN_SIZE.x)),Math.floor((Math.random() * SCREEN_SIZE.y))))}>
                        <img src="../assets/Fish/fish.svg" width="60"></img>
                        <label class={styles.label}>${guppyCost}</label>
                    </button> 
                
                    <button class={styles.button}>
                        <img src="../assets/drops/crumb.svg" width="60"></img>
                        <label class={styles.label}>${foodUpgradeCost}</label>
                    </button> 

                    <button class={styles.button}>
                        <label class={styles.labelNumber}>{foodQuantity}</label>
                        <label class={styles.label}>${foodQuantCost}</label>
                    </button> 

                    <button class={styles.button}>
                        <img src="../assets/Fish/bigfish/bigfish.svg" width="60"></img>
                        <label class={styles.label}>${bigFishCost}</label>
                    </button> 
                    
                    <button class={styles.button}>
                        <img src="../assets/gun/gunorange.svg" width="60"></img>
                        <label class={styles.label}>${gunCost}</label>
                    </button> 

                    <button class={styles.button}>
                        <img src="../assets/upgrades/egg.svg" width="60"></img>
                        <label class={styles.label}>${eggCost}</label>
                    </button> 

                    <div class={styles.navTwo}>
                        <button class={styles.buttonTwo}>
                    
                            <label class={styles.labelTwo}>Menu</label>
                        </button> 
                        <label class={styles.labelThree}>${money}</label>
                    </div>
                </div>
            <Stage
                width={document.documentElement.clientWidth}
                height={document.documentElement.clientHeight}
                options={{ backgroundColor: 0x00ffff }}
                onClick={(e) => getClick(e)}>
            <Background background={background} />
                
                {hasClicked ? <Crumb crumb={locationMouseClick} hasCrumb={hasClicked} />: null}
                {fish}
                {snail}
                 {/* <GoldFish  {...fish} /> */}
                {/* <Snail x={Math.floor(Math.random() * document.documentElement.clientWidth)}
                 y={document.documentElement.clientHeight / 1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight / 6))} /> */}
            </Stage>

        </React.Fragment>

    )
}

const mapStateToProps = state => {
    return {
        fish: state.fish_reducer,
        snail: state.snail_reducer
    }
}

export default connect(mapStateToProps,{createFish,createSnail})(Game)
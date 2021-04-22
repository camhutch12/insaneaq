
import React, { useEffect, useState  } from 'react'
import { Stage, Sprite, Graphics, useApp, Container, render } from '@inlet/react-pixi';
import Background from '../background/background'
import Crumb from '../drops/crumb'
import Snail from '../Fish/snail/snail';
import GoldFish from '../Fish/goldfish/goldfish';
import styles from '../style.module.css';
import {GoldFish as GL} from '../model/Goldfish';
import {connect} from 'react-redux'
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
let goldfish1;
    console.log(props)
    if(!localStorage.getItem('goldfish')){
        const goldfish1 = new GL(Math.floor((Math.random() * SCREEN_SIZE.x)),Math.floor((Math.random() * SCREEN_SIZE.y)));
        localStorage.setItem('goldfish',JSON.stringify(goldfish1))
    }else{
         goldfish1 = JSON.parse(localStorage.getItem('goldfish'))
    }


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


    const positons = [

        {
            pos:
            {
                x: Math.floor((Math.random() * window.innerWidth) + 1)
                , y: Math.floor((Math.random() * window.innerWidth) + 1)
            },
            food: {
                x: locationMouseClick === undefined ? 0 : locationMouseClick.x,
                y: locationMouseClick === undefined ? 0 : locationMouseClick.y
            }
        },

    ]

    const fish = props.fish.map((ele,index) => <GoldFish key={index} {...ele}/>)
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
                <div className={styles.navbar}>
                    <button 
                     className={styles.button}
                     onClick={() => props.createFish(new GL(Math.floor((Math.random() * SCREEN_SIZE.x)),Math.floor((Math.random() * SCREEN_SIZE.y))))}>
                        <img src="../assets/Fish/fish.svg" width="60"></img>
                        <label className={styles.label}>${guppyCost}</label>
                    </button> 
                
                    <button className={styles.button}>
                        <img src="../assets/drops/crumb.svg" width="60"></img>
                        <label className={styles.label}>${foodUpgradeCost}</label>
                    </button> 

                    <button className={styles.button}>
                        <label className={styles.labelNumber}>{foodQuantity}</label>
                        <label className={styles.label}>${foodQuantCost}</label>
                    </button> 

                    <button className={styles.button}>
                        <img src="../assets/Fish/bigfish/bigfish.svg" width="60"></img>
                        <label className={styles.label}>${bigFishCost}</label>
                    </button> 
                    
                    <button className={styles.button}>
                        <img src="../assets/gun/gunorange.svg" width="60"></img>
                        <label className={styles.label}>${gunCost}</label>
                    </button> 

                    <button className={styles.button}>
                        <img src="../assets/upgrades/egg.svg" width="60"></img>
                        <label className={styles.label}>${eggCost}</label>
                    </button> 

                    <div className={styles.navTwo}>
                        <button className={styles.buttonTwo}>
                    
                            <label className={styles.labelTwo}>Menu</label>
                        </button> 
                        <label className={styles.labelThree}>${money}</label>
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
                 {/* <GoldFish  {...fish} /> */}
                <Snail x={Math.floor(Math.random() * document.documentElement.clientWidth)}
                 y={document.documentElement.clientHeight / 1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight / 6))} />
            </Stage>

        </React.Fragment>

    )
}

const mapStateToProps = state => {
    return {fish: state.fish_reducer}
}

export default connect(mapStateToProps,{createFish})(Game)
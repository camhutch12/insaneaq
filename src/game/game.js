
import React, { useEffect, useState  } from 'react'
import { Stage, Sprite, Graphics, useApp, Container, render } from '@inlet/react-pixi';
import Background from '../background/background'
import Crumb from '../drops/crumb'
import Snail from '../Fish/snail/snail';
import GoldFish from '../Fish/goldfish/goldfish';
import Coin from '../drops/coin';
import styles from '../style.module.css';
import {GoldFish as GL} from '../model/Goldfish';
import {connect} from 'react-redux'
import {createSnail} from '../actions/snailActions'
import {createFish} from '../actions/fishActions'
import {createCrumb,deleteCrumb} from '../actions/crumbActions'

import {createCrumb} from '../actions/crumbActions'
import {createCoin} from '../actions/coinActions'
import Navbar from '../navbar/navbar';
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
const Game = ({background,...props}) => {

    const [locationMouseClick, setlocationMouseClick] = useState({ x: null, y: null });
    const [hasClicked, setHasClicked] = useState(false);

    /*
    Mouse listener
    */
    const getClick = (event) => {
        locationMouseClick.y = event.clientY;
        setHasClicked(true)
        setlocationMouseClick({x:event.clientX,y:event.clientY})
        props.createCrumb({x:event.clientX,y:event.clientY});
    }

    const fish = props.fish.map((ele,index) => {
    return (<GoldFish 
        key={index}
         goldfish={ele}
          crumb={props.crumb}
           deleteCrumb={props.deleteCrumb}
            goldfishList={props.fish}
            createCoin={props.createCoin}
            />
            
            )
})
    const crumb = props.crumb.map((ele,index) => <Crumb key={index} crumb={ele}/>)
    const snail = props.snail.map((ele,index) => <Snail key={index} {...ele}/>)
    
    // get coin components/sprites to render
    var coin
    if(props.coin != undefined){
        coin = props.coin.map((ele,index) => <Coin key={index} coin={ele}/>)
    }

    return (
            <React.Fragment>   
                <Navbar {...props} />

            <Stage
                width={document.documentElement.clientWidth}
                height={document.documentElement.clientHeight}
                options={{ backgroundColor: 0x00ffff }}
                onClick={(e) => getClick(e)}>
            <Background background={background} />
                
                {/* {hasClicked ? <Crumb crumb={locationMouseClick} hasCrumb={hasClicked} />: null} */}
                {fish}
                {snail}
                {crumb}
                {coin}
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
        snail: state.snail_reducer,
        crumb: state.crumb_reducer,
        coin: state.coin_reducer,
    }
}

/*
Connect gathers the data from our redux store
*/
export default connect(mapStateToProps,
                {
                    createFish,
                    createSnail,
                    createCrumb,
                    deleteCrumb,
                    createCoin,
                })
                (Game)

import React, { useEffect, useState } from 'react'
import { Stage, Sprite, Graphics, useApp, Container, render } from '@inlet/react-pixi';
import Background from '../background/background'
import Crumb from '../drops/crumb'
import Snail from '../Fish/snail/snail';
import GoldFish from '../Fish/goldfish/goldfish';
import {GoldFish as GL} from '../model/Goldfish';
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





const Game = ({background,SCREEN_SIZE}) => {
let goldfish1;

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
    return (
        <React.Fragment>
            <Stage
                width={document.documentElement.clientWidth}
                height={document.documentElement.clientHeight}
                options={{ backgroundColor: 0x00ffff }}
            onClick={(e) => getClick(e)}>
            <Background background={background} />
                
                {hasClicked ? <Crumb crumb={locationMouseClick} hasCrumb={hasClicked} />: null}
                 <GoldFish  {...goldfish1} />
                <Snail x={Math.floor(Math.random() * document.documentElement.clientWidth)}
                 y={document.documentElement.clientHeight / 1.3 + Math.floor(Math.random() * (document.documentElement.clientHeight / 6))} />
            </Stage>

        </React.Fragment>

    )
}

export default Game
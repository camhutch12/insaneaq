
import React, { useEffect, useState } from 'react'
import Background from '../background/background'
import Crumb from '../drops/crumb'
import Snail from '../Fish/snail/snail';
import GoldFish from '../Fish/goldfish/goldfish';

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





const Game = props => {

const [locationMouseClick,setlocationMouseClick] = useState({x:null,y:null});
const update = (e) => setlocationMouseClick({x:e.clientX,y:e.clientY});
useEffect(() => {
    // window.addEventListener("click",(e)=> 
    // setlocationMouseClick({x:e.clientX,y:e.clientY}))
    // console.log(locationMouseClick)
    if(props.getClick() !== undefined){
        setlocationMouseClick(props.posMouseClick)
    }
    console.log(locationMouseClick)
},[locationMouseClick])


const positons = [
  
    {
      pos:
      {x:Math.floor((Math.random() * window.innerWidth)+1)
        ,y:Math.floor((Math.random() * window.innerWidth)+1)
      },
      food:{
        x:locationMouseClick === undefined ? 0 :locationMouseClick.x,
        y:locationMouseClick === undefined ? 0:locationMouseClick.y }
  },
    
  ]

        console.log(props.posClicked)
    return (
        <React.Fragment>
            <Background />
            <Crumb crumb={props.posMouseClick} hasCrumb={props.hasClicked} />
            {positons.map((ele,index) =>  <GoldFish key={index} {...ele} />)}
            <Snail x={Math.floor(Math.random() *  window.innerWidth)} y={window.innerHeight/1.3 + Math.floor(Math.random() * (window.innerHeight/6))}/>
        </React.Fragment>

    )
}

export default Game
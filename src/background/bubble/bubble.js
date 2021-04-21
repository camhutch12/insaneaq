import {Sprite} from '@inlet/react-pixi'
import React from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg bubble from icons8
with a random x and y coordinate
alpha makes it transparent
scale tranforms the size
*/
const Bubble  = (props) => {
    const rand = Math.random()*2.5;
    return <Sprite 
    image = '../../../assets/background/bub3.svg'
    x={Math.floor(Math.random() * document.documentElement.clientWidth)}
    y={Math.floor(Math.random() * document.documentElement.clientHeight - document.documentElement.clientHeight/4)}
    scale = {[rand,rand]}
    alpha={0.2}
    />
    
}

export default Bubble;
import {Graphics} from '@inlet/react-pixi'
import React from 'react'
const Bubble  = () => {
    const draw = React.useCallback(g => {
        g.image = '../../../assets/background/bub3.svg'
        g.x={Math.floor(Math.random() * app.renderer.width)}
        g.y={Math.floor(Math.random() * (app.renderer.height- app.renderer.height/4))}
      }, []);
    return (
        <Sprite draw={draw}/>
    )
}

export default Sand;
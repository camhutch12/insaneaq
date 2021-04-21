import {Graphics} from '@inlet/react-pixi'
import React from 'react'

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js Graphics object of a yellow ellipse,
simulating sand on the sea floor
*/
const Sand  = () => {
    const draw = React.useCallback(g => {
        g.clear();
        g.beginFill(0xffd500)
        g.drawEllipse(window.innerWidth/2,window.innerHeight, window.innerWidth, window.innerHeight/5)
        g.endFill()
      }, []);
    return (
        <Graphics draw={draw}/>
    )
}

export default Sand;


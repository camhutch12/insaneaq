import {Graphics} from '@inlet/react-pixi'
import React from 'react'
import {CONSTANTS} from '../../util/utilities'
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
        g.drawEllipse((CONSTANTS.MAXX+200)/2,(window.innerHeight-100), (CONSTANTS.MAXX+200), (CONSTANTS.MAXY+100)/5)
        g.endFill()
      }, []);
    return (
        <Graphics draw={draw}/>
    )
}

export default Sand;


import {Graphics} from '@inlet/react-pixi'
import React from 'react'
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

// // create sand
// const sand = new PIXI.Graphics();
// // set color
// sand.beginFill(0xffd500); // sand color
// // draw an ellipse (x, y, width, height)
// sand.drawEllipse(app.renderer.width/2, app.renderer.height, app.renderer.width, app.renderer.height/5);
// sand.endFill();
// // draw sand
// app.stage.addChild(sand);export default Sand;


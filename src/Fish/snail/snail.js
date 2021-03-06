import {Sprite} from '@inlet/react-pixi'
import React,{useRef,useState,useReducer} from 'react'
import { useTick } from '@inlet/react-pixi'
import {CONSTANTS} from '../../util/utilities'
/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a pixi.js sprite of an svg image of a snail from icons8,
with a passed in x and y coordinate,
scale tranforms the size
*/
const Snail  = ({snail,coin,players,...props}) => {
    
    snail.coin = null;
    snail.coinList = []
    const [pos, setPos] = useState({})

    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)

    useTick(delta => {

        // check if game has been paused
    if(!players.pause){
        // play game


        // increase the counter
        let i = (iter.current += 0.00001 * delta)
        // checks if there is a coin for the snail to chase 
        if(snail.setHascoinsToChase(coin)){   
            // creates a list of coins 
            snail.setCoinList(coin)
            // finds closet coin to the snail
            snail.getClosestCoin()
            // if the snail coin is not null
            if(snail.coin !== null ){
                // update the position by taking the direction * speed + old poistion
            snail.direction[0] =  snail.coin.x
            snail.difference[0] = snail.direction[0] - snail.x
            let distance = Math.sqrt(Math.pow(snail.difference[0],2))
             snail.unitVector = [(snail.difference[0]/distance)] 
            snail.setPosition(snail.x+(snail.unitVector[0]*snail.speed))
            }
            }
            



   
        
        // if outside the right bounds, change direction left
        
        if(snail.x > CONSTANTS.MAXX){
            snail.goRight = true;
            snail.goLeft = false;
            snail.unitVector[0] = snail.unitVector[0] * -1;
            iter.current=0;
        }

        // if outside the bounds left, change direction right
        if(snail.x < CONSTANTS.MINX){
            snail.unitVector[0] = snail.unitVector[0] * -1;
             iter.current=0;
        }

       
        
            
        // update position
        snail.setPosition(snail.x + snail.unitVector[0] * snail.speed); 
       
        let scaleX = 0.3;
        let scaleY = 0.3;
        // check if fish is moving right
        if(snail.unitVector[0]<0){
            scaleX = scaleX*-1; // change direction of snail
        }

        // delete coin
        for(let j =0; j < coin.length; j++){
            if(snail.x  <= coin[j].x+30 && snail.x  >= coin[j].x-30 && (coin[j].y > snail.y-20)){
                props.player[0].addCoins(coin[j])
                props.deleteCoin(coin[j]);
                snail.coin = null;
            }
        }

        
        
        // update current frame
        update({
            type: 'update',
            data: {
            x: snail.x,
            y: snail.y,
            scale:{x:scaleX,y:scaleY},
            anchor:0.5,
    
            
            }
        })
    }
    })






    return <Sprite 
    image = '../../../assets/background/snail.svg'
    {...motion}
    />
}

export default Snail;
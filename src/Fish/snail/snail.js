import {Sprite} from '@inlet/react-pixi'
import React,{useRef,useState,useReducer} from 'react'
import { useTick } from '@inlet/react-pixi'
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
const Snail  = ({snail,coin}) => {
    

    const [pos, setPos] = useState({})

    const reducer = (_, { data }) => data
    const [motion, update] = useReducer(reducer)
    const iter = useRef(0)

    useTick(delta => {

        // increase the counter
        let i = (iter.current += 0.00001 * delta)
        let unit 
        if(snail.setHasCoinsToChase(coin)){
            snail.setCoinList(coin)
            snail.getClosestcoin()
            snail.direction[0] =  snail.coin.x
            snail.direction[1] =  snail.coin.y; 
            snail.difference[0] = snail.direction[0] - snail.x
            snail.difference[1] = snail.direction[1] - snail.y
            let distance = Math.sqrt(Math.pow(snail.difference[0],2) + Math.pow(snail.difference[1],2))
            let unit = [(snail.difference[0]/distance), (snail.difference[1]/distance )] 
            snail.setPosition(snail.x+(unit[0]*1.1), 
            snail.y+(unit[1]*1.1))
            }
            else{
                snail.resetDirection()
            }


        // hunger timer
        // snail.setHunger(snail.hungerTimer +1);

        // coin drop timer
        // snail.setCoinDrop(snail.coinDropTimer +1);

         // Check if coin needs to drop
        // if(snail.coinDropTimer > snail.dropRate){
        //     // reset timer
        //     snail.setCoinDrop(0)
        //     // add coin to array of coins (redux)
        //     createCoin({x:snail.x ,y:snail.y})
        // }

        // every 20 iterations (?) change the direction 
        if(i%0.00001==0){
            //console.log("Hi")
            //iter.current=0;
            //snail.difference[1] = snail.difference[1] * -1;
        }
        
        // if outside the right bounds, change direction left
        if(snail.x > window.innerWidth){
            snail.difference[0] = snail.difference[0] * -1;
            iter.current=0;
        }

        // if outside the bounds left, change direction right
        if(snail.x < 0){
             snail.difference[0] = snail.difference[0] * -1;
             iter.current=0;
        }

        // if outside the top bounds, change direction down
        if(snail.y < 0){
            snail.difference[1] = snail.difference[1] * -1;
            iter.current=0;
        }

        // if outside the bottom bounds, change direction up
        if(snail.y > (window.innerHeight-100)){
            snail.difference[1] = snail.difference[1] * -1;
            iter.current=0;
        }

        // check if coins exist
        
            
        // update position
        if(!snail.setHasCoinsToChase(coin)){
            snail.setPosition(snail.x+(snail.difference[0]*i), 
            snail.y+(snail.difference[1]*i))
          
        } 
       

        
        let scaleX = 0.3;
        let scaleY = 0.3;
        // check if fish is moving right
        if(snail.difference[0]>0){
            scaleX = scaleX*-1; // change direction of fish
        }

        // delete coin
        for(let j =0; j < coin.length; j++){
            if(Math.floor(snail.x)  === coin[j].x && Math.floor(snail.y) == coin[j].y || 
            Math.ceil(snail.x)  === coin[j].x && Math.ceil(snail.y) == coin[j].y){
                console.log(coin[j])
                // deletecoin(coin[j]);
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
            sp:this,
            
            }
        })
    })






    return <Sprite 
    image = '../../../assets/background/snail.svg'
    {...motion}
    />
}

export default Snail;
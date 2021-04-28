import React, { useEffect, useState } from "react";
import {
  Stage,
  Sprite,
  Graphics,
  useApp,
  Container,
  render,
} from "@inlet/react-pixi";
import { connect } from "react-redux";
import Background from "../background/background";
import Crumb from "../drops/crumb";
import Snail from "../Fish/snail/snail";
import GoldFish from "../Fish/goldfish/goldfish";
import {GoldFish as GL} from '../model/Goldfish'
import Coin from "../drops/coin";
import styles from "../style.module.css";
import { createSnail,resetSnail } from "../actions/snailActions";
import { createFish, deleteFish,resetFish } from "../actions/fishActions";
import { createCoin, deleteCoin,resetCoin } from "../actions/coinActions";
import { createCrumb, deleteCrumb,resetCrumb } from "../actions/crumbActions";
import { createAlien, deleteAlien,resetAlien } from "../actions/alienAction";
import {createPlayer,resetPlayer} from '../actions/playerActions'
import Alien from "../alien/alien";
import Navbar from "../navbar/navbar";
import { ContextSystem } from "@pixi/core";
import GameOver from "../UI/gameover";
import { unmountComponentAtNode } from "react-dom";
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
const Game = ({ background, ...props }) => {


const [app,setApp] = useState(null)


useEffect(() => {
  return () => {
  props.createFish(new GL(Math.floor((Math.random() * props.SCREEN_SIZE.x)),Math.floor((Math.random() * props.SCREEN_SIZE.y))))
  props.createFish(new GL(Math.floor((Math.random() * props.SCREEN_SIZE.x)),Math.floor((Math.random() * props.SCREEN_SIZE.y))))
  props.createFish(new GL(Math.floor((Math.random() * props.SCREEN_SIZE.x)),Math.floor((Math.random() * props.SCREEN_SIZE.y))))

}},[])



  const createMonster = () => {
    props.createAlien(1)
    props.timer.stopTime(props.timer.timerID);
    props.timer.currentTime = 0;
    props.timer.startTime()
  }




  const [locationMouseClick, setlocationMouseClick] = useState({
    x: null,
    y: null,
  });

  const [hasClicked, setHasClicked] = useState(false);

  /*
    Mouse listener
*/
  const getClick = (event) => {
    
    let attackingMonster = {};

    // get click cooridnates
    locationMouseClick.y = event.clientY;
    setHasClicked(true);
    const mousePos = { x: event.clientX, y: event.clientY };

    // This function is going to carry all of the logic for different click events

    attackingMonster = alienIsClicked(mousePos);
    if (attackingMonster.isAttacking) {
      // shoot blaster
      damageMonster(attackingMonster, props);
    } else {
      // check if we clicked on a coin, otherwise deploy a crumb
      if (coinIsNotClicked(mousePos)) {
        // check if crumbs are allowed to be deployed, based on crumb limit
        if (crumb.length < props.player[0].food) {
          props.createCrumb({ x: event.clientX, y: event.clientY });
        }
      }
    }

    setlocationMouseClick({ x: event.clientX, y: event.clientY });
  };

  /*
This method checks whether a coin has been clicked or not.

Always assume we are clicking a coin (innocent until proven guilty)
*/
  const coinIsNotClicked = (mousePos) => {
    // go through all the coins
    for (let i = 0; i < props.coin.length; i++) {
      let currentCoin = props.coin[i];
      const coinPos = { x: currentCoin.x, y: currentCoin.y };
      // check if clicking on coin
      if (isboundingBoxCoords(mousePos, coinPos, 14)) {
        // delete coin
        props.deleteCoin(currentCoin);
        // increase money counter
        props.player[0].addCoins(currentCoin);

        return false; // guilty, we are clicking a coin!
      }
    }
    return true; // not clicking on a coin
  };

  const alienIsClicked = (mousePos) => {
    const obj = {
      alien: null,
      isAttacking: false,
    };
    if (props.aliens.length > 0) {
      for (let alien of props.aliens) {
        let hasCollision = isboundingBoxCoords(
          mousePos,
          { x: alien.x, y: alien.y  -100 },
          30
        );
        if (hasCollision) {
          console.log("attacking the monster");
          obj.isAttacking = true;
          obj.alien = alien;
        }
      }
    }
    return obj;
  };

  /*
  This function checks whether two coordinates 
  are within a box defined by the offset size
  */
  const isboundingBoxCoords = (p1, p2, offset) => {
    return (
      p1.x < p2.x + offset &&
      p1.x > p2.x - offset &&
      p1.y > p2.y + offset &&
      p1.y > p2.y - offset
    );
  };

  /*
Map all the fish component sprites from our redux store to a variable to render
  */
  const fish = props.fish.map((ele, index) => {
    return (
      <GoldFish
        key={index}
        goldfish={ele}
        crumb={props.crumb}
        deleteCrumb={props.deleteCrumb}
        deleteFish={props.deleteFish}
        goldfishList={props.fish}
        createCoin={props.createCoin}
        createAlien = {createMonster}
        timer={props.timer}
      />
    );
  });

  const crumb = props.crumb.map((ele, index) => (
    <Crumb key={index} crumb={ele} deleteCrumb={props.deleteCrumb} />
  ));
  const snail = props.snail.map((ele, index) => (
    <Snail
      key={index}
      snail={ele}
      coin={props.coin}
      deleteCoin={props.deleteCoin}
      player={props.player}
    />
  ));

  const alien = props.aliens.map((ele, index) => {
    return (
      <Alien
        key={index}
        goldfishList={props.fish}
        deleteFish={props.deleteFish}
        alien={ele}
      />
    );
  });

  // get coin components/sprites to render
  var coin;
  if (props.coin != undefined) {
    coin = props.coin.map((ele, index) => (
      <Coin key={index} coin={ele} deleteCoin={props.deleteCoin} />
    ));
  }
  if(fish.length > 0){
    return (
      <React.Fragment>
        <Navbar {...props} />
        <Stage
          width={props.SCREEN_SIZE.x}
          height={props.SCREEN_SIZE.x}
          options={{ backgroundColor: 0x00ffff}}
          onClick={(e) => getClick(e)}       
        >
          <Background background={background} />
          {alien}
          {fish}
          {snail}
          {coin}
          {crumb}
  
        </Stage>
      </React.Fragment>
    );
  }
  
  else{
    return (
      
        <GameOver {...props}/>
      
    )
  }
 
};

/*
This maps the redux store state to the props to pass in a paramters
*/
const mapStateToProps = (state) => {
  return {
    fish: state.fish_reducer,
    snail: state.snail_reducer,
    crumb: state.crumb_reducer,
    coin: state.coin_reducer,
    player: state.player_reducer,
    aliens: state.alien_reducer,
    timer:state.timer_reducer,
  };
};

/*
Connect gathers the data from our redux store
*/
export default connect(mapStateToProps, {
  createFish,
  deleteFish,
  resetFish,
  createSnail,
  resetSnail,
  createCrumb,
  deleteCrumb,
  resetCrumb,
  createCoin,
  deleteCoin,
  resetCoin,
  createAlien,
  deleteAlien,
  resetAlien,
  createPlayer,
  resetPlayer,
})(Game);
function damageMonster(attackingMonster, props) {
  if (attackingMonster.alien.health - 1 === 0) {
    // delete the monster
    props.deleteAlien(attackingMonster.alien);
  } else {
    attackingMonster.alien.health -= 1;
  }
}

import React, { useEffect, useState } from "react";
import {Stage,Sprite,Graphics,useApp,Container,render,} from "@inlet/react-pixi";
import { ContextSystem } from "@pixi/core";
import { unmountComponentAtNode } from "react-dom";
import { connect } from "react-redux";
import Background from "../background/background";
// Models ***************************************************
import Crumb from "../drops/crumb";
import Blaster from "../alien/blaster";
import Snail from "../Fish/snail/snail";
import GoldFish from "../Fish/goldfish/goldfish";
import Carnivore from "../Fish/carnivore/carnivore";
import { GoldFish as GL } from "../model/Goldfish";
import Coin from "../drops/coin";
import Portal from '../alien/portal.js'
import TextWarning from '../alien/text.js'
import Alien from "../alien/alien";
import Navbar from "../navbar/navbar";
import GameOver from "../UI/gameover";
import Seahore from "../Fish/seahorse/seahorse";
import styles from "../style.module.css";
// Actions ***********************************************
import { createSnail, resetSnail } from "../actions/snailActions";
import { createFish, deleteFish, resetFish ,clearFish} from "../actions/fishActions";
import {createCarnivore,deleteCarnivore,resetCarnivore,} from "../actions/carnivoreActions";
import { createCoin, deleteCoin, resetCoin } from "../actions/coinActions";
import { createCrumb, deleteCrumb, resetCrumb } from "../actions/crumbActions";
import {createBlaster,deleteBlaster,resetBlaster,} from "../actions/blasterActions";
import {createClam,deleteClam} from '../actions/clamAction'
import {createSwordFish,deleteSwordFish,resetSwordFish} from '../actions/swordfishAction' ;
import {createSeahorse,deleteSeahorse,resetSeahorse} from '../actions/seahorseAction'
import {createPreggo,deletePreggo,resetPreggo} from '../actions/preggoAction'
import { createAlien, deleteAlien, resetAlien } from "../actions/alienAction";
import { createPlayer, resetPlayer } from "../actions/playerActions";
import {createPortal,deletePortal,resetPortal,} from "../actions/portalActions";
import {createText,deleteText,resetText,} from "../actions/textActions";
import { Preggo } from "../Fish/preggo/preggo";
import SwordFish from "../Fish/swordfish/swordfish";
import Clam  from '../Fish/clam/clam';
import {CONSTANTS,randomNumber} from '../util/utilities'

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

const Game = ({ background,levelParams, ...props }) => {
  const [app, setApp] = useState(null);
  let totalFishList = props.fish.concat(props.carnivore)
  useEffect(() => {
    return () => {
      props.clearFish()
      props.createFish(
        new GL(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY)),

      );
      props.createFish(
        new GL(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY)),
       
      );
    };
  }, []);

  const createMonster = () => {
    let alienX = randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX)
    let alienY = randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)
    props.createAlien({x:alienX, y:alienY});
    props.createPortal({x:alienX, y:alienY});
    props.timer.stopTime(props.timer.timerID);
    props.timer.currentTime = 0;
    props.timer.startTime();
  };

  const createWarning = () => {
    props.createText()
    
  }

  const [locationMouseClick, setlocationMouseClick] = useState({
    x: null,
    y: null,
  });

  const [hasClicked, setHasClicked] = useState(false);

  /*
    Mouse listener
    // This function is going to carry all of the logic for different click events
*/
  const getClick = (event) => {
    let attackingMonster = {};

    // get click cooridnates
    locationMouseClick.y = event.clientY;
    setHasClicked(true);
    const mousePos = { x: event.clientX, y: event.clientY };

    

    // check if mouse clicks are on monster
   
    attackingMonster = alienIsClicked(mousePos);
    if (attackingMonster.alienIsPresent) {
      // shoot blaster
      if(levelParams.allowedAliens.canhaveAlien1){
      props.createBlaster({ x: event.clientX, y: event.clientY });
      if (attackingMonster.isAttacking) {
        // damage monster
        damageMonster(attackingMonster, props);
      }
    }
    } 
  
    
    else {
      // check if we clicked on a coin, otherwise deploy a crumb
      if (coinIsNotClicked(mousePos)) {
        // check if crumbs are allowed to be deployed, based on crumb limit
        if (crumb.length < props.player[0].food) {
          props.createCrumb({ x: event.clientX, y: event.clientY,isSeahorse:false });
          props.player[0].removeCoins(5);
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
      alienIsPresent: false,
    };
    if (props.aliens.length > 0) {
      for (let alien of props.aliens) {
        let hasCollision = isboundingBoxCoords(
          mousePos,
          { x: alien.x, y: alien.y - 100 },
          25
        );
        obj.alienIsPresent = true;
        if (hasCollision) {
          
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
        createAlien={createMonster}
        timer={props.timer}
        createPortal = {props.createPortal}
        createText = {createWarning}
        levelParams={levelParams}
      />
    );
  });

  const seahorse = props.seahorse.map((ele, index) => {
    return (
      <Seahore
        key={index}
        seahorse={ele}
        crumb={props.crumb}
        createCrumb={props.createCrumb}
      />
    );
  });


  const preggo = props.preggo.map((ele, index) => {
    return (
      <Preggo
        key={index}
        preggo={ele}
        deleteFish={props.deletePreggo}
        createFish={props.createFish}
        createCoin={props.createCoin}
      />
    );
  });

  const swordfish = props.swordFish.map((ele, index) => {
    return (
      <SwordFish
        key={index}
        swordFish={ele}
        aliensList={props.aliens}
        deleteCrumb={props.deleteCrumb}
        deleteFish={props.deleteSwordFish}
        goldfishList={props.swordFish}
        createCoin={props.createCoin}
        deleteAlien={props.deleteAlien}
        timer={props.timer}
      />
    );
  });


  const carnivore = props.carnivore.map((ele, index) => {
    return (
      <Carnivore
        key={index}
        carnivore={ele}
        goldfishList={props.fish}
        deleteFish={props.deleteFish}
        deleteCarnivore={props.deleteCarnivore}
        carnivoreList={props.carnivore}
        createCoin={props.createCoin}
        createAlien={createMonster}
        timer={props.timer}
      />
    );
  });

  const crumb = props.crumb.map((ele, index) => (
    <Crumb key={index} crumb={ele} deleteCrumb={props.deleteCrumb} />
  ));
  const snail  = levelParams.allowedPets.canhaveSnail === true ?
  props.snail.map((ele, index) => (
    <Snail
      key={index}
      snail={ele}
      coin={props.coin}
      deleteCoin={props.deleteCoin}
      player={props.player}
    />
  ))
  :null;
  

  const clam = props.clam.map((ele, index) => (
    <Clam
      key={index}
      clam={ele}
      coin={props.coin}
      deleteCoin={props.deleteCoin}
      player={props.player}
    />
  ));

  const alien = levelParams.allowedAliens.canhaveAlien1 === true ?  props.aliens.map((ele, index) => {
    return (
      <Alien
        key={index}
        goldfishList={totalFishList}
        deleteFish={props.deleteFish}
        deleteCarnivore={props.deleteCarnivore}
        alien={ele}
      />
    );
  }) : null;

  
  const text = levelParams.allowedAliens.canhaveAlien1 === true ?  props.text.map((ele, index) => {
     return (
      <TextWarning
         key={index}
         deleteText={props.deleteText}
         text={ele}
       />
     );
   }) : null;
  
  const portal = levelParams.allowedAliens.canhaveAlien1 === true ?  props.portal.map((ele, index) => {
     return (
      <Portal
         key={index}
         deletePortal={props.deletePortal}
         portal={ele}
       />
     );
   }) : null;


  const blaster = levelParams.allowedAliens.canhaveAlien1 === true ? props.blaster.map((ele, index) => (
    <Blaster key={index} blaster={ele} deleteBlaster={props.deleteBlaster} />
  )) : null;

  // get coin components/sprites to render
  let coin;
  if (props.coin != undefined) {
    coin = props.coin.map((ele, index) => (
      <Coin key={index} coin={ele} deleteCoin={props.deleteCoin} />
    ));
  }
  
  if ( totalFishList.length > 0) {
    return (
      <React.Fragment>
        <Navbar levelParams={levelParams} {...props} />
        <Stage
          width={props.SCREEN_SIZE.x}
          height={props.SCREEN_SIZE.x}
          options={{ backgroundColor: 0x00ffff }}
          onClick={(e) => getClick(e)}
        >
          <Background background={background} />
          
          {levelParams.allowedPets.canhaveSeahorse === true ? seahorse : null}
          {levelParams.allowedAliens.canhaveAlien1 === true ? portal : null}
          {levelParams.allowedAliens.canhaveAlien1 === true ? alien : null}
          {fish}
          {levelParams.allowedPets.canhaveSnail === true ? snail : null}
          {coin}
          {crumb}
          {levelParams.allowedAliens.canhaveAlien1 === true ? blaster : null}
          {levelParams.allowedUpgrades.carnivore.canhave === true ? carnivore : null}
          {levelParams.allowedPets.canhavePreggo === true ? preggo : null}
          {levelParams.allowedPets.canhaveSwordFish === true ? swordfish : null}
          {levelParams.allowedPets.canhaveClam === true ? clam : null}
          {levelParams.allowedAliens.canhaveAlien1 === true ? text : null}
        </Stage>
      </React.Fragment>
    );
  } else {
    return <GameOver {...props} />;
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
    timer: state.timer_reducer,
    blaster: state.blaster_reducer,
    carnivore: state.carnivore_reducer,
    swordFish: state.swordFish_reducer,
    seahorse: state.seahorse_reducer,
    preggo: state.preggo_reducer,
    text: state.text_reducer,
    portal: state.portal_reducer,
    clam:state.clam_reducer,
  };
};

/*
Connect gathers the data from our redux store
*/
export default connect(mapStateToProps, {
  createFish,
  deleteFish,
  resetFish,
  clearFish,
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
  createBlaster,
  deleteBlaster,
  resetBlaster,
  createCarnivore,
  deleteCarnivore,
  resetCarnivore,
  createSwordFish,
  deleteSwordFish,
  resetSwordFish,
  createPreggo,
  deletePreggo,
  resetPreggo,
  createSeahorse,
  deleteSeahorse,
  resetSeahorse,
  createPortal,
  deletePortal,
  resetPortal,
  createText,
  deleteText,
  resetText,
  createClam
})(Game);
function damageMonster(attackingMonster, props) {
  if (attackingMonster.alien.health - 1 === 0) {
    // delete the monster
    props.deleteAlien(attackingMonster.alien);
  } else {
    attackingMonster.alien.health -= 1;
  }
}

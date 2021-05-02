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
import Pearl from '../drops/pearl'
import styles from "../style.module.css"
import {Crumb as CB }from '../model/crumb' ;
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
import {createPearl,deletePearl} from '../actions/pearlActions'
import { Preggo } from "../Fish/preggo/preggo";
import SwordFish from "../Fish/swordfish/swordfish";
import Clam  from '../Fish/clam/clam';
import {CONSTANTS,randomNumber} from '../util/utilities'
import { Timer } from "../util/timer";


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
  const [app, setApp] = useState(null); // This is used to store the state of our game
  let totalFishList = props.fish.concat(props.carnivore) // This concatenates the fish array and canivore array to have a big array with all the fish in the game
  const [locationMouseClick, setlocationMouseClick] = useState({
    x: null,
    y: null,
  }); // location of x and y that the user clicked

  const [hasClicked, setHasClicked] = useState(false); // boolean that is stored when a mouse is clicked or not 
  /* This function is only called once per level 
  [] means that only called when the component is mounted. 
  inside this componets does a reset of everything */
  useEffect(() => {
    
    props.player[0].coins =0;
    props.player[0].damage =1;
    props.player[0].food = 2;
    CB.level = 1; // sets the upgrade level of crumb back to zero
    // removes the pearl
    if(props.pearl.length !== 0){
    props.deletePearl(props.pearl[0])
    
    }
    
    try{

      // removes all the carnivores
      if(props.carnivore.length !== 0){
      for(let i =0; i< props.carnivore.length; i++){
        props.deleteCarnivore(props.carnivore[i]);
      }
    }
  }catch(e){}
  try{
    // removes all the crumbs
      if(props.crumb.length !== 0){
      for(let i =0; i< props.crumb.length; i++){
        props.deleteCrumb(props.crumb[i]);
      }
    }
  }catch(e){}
    try{
      // removes all the coins 
      if(props.coin.length !== 0){
      for(let i =0; i< props.coin.length; i++){
        props.deleteCoin(props.coin[i]);
      }
    }
  }catch(e){}



  try{
    // removes all the aliens
    if(props.aliens.length !== 0){
    for(let i =0; i< props.aliens.length; i++){
      props.deleteAlien(props.alien[i]);
    }
  }
}catch(e){}


try{
  // resets all the timer at the start of every level
  props.timer.stopTime()
  props.timer.startTime()
  GL.resetTimer();
  GL.startTimer();


  
}
catch(e){}


    try{
      if(props.pearl.length !== 0){
        props.deletePearl(props.pearl[0])
        console.log('inside useEffect')
        }

       

    }catch(e){}


    return () => {
      // clears the fishlist and then creates three new goldfish
      props.clearFish()
      props.createFish(
        new GL(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY)),

      );
      props.createFish(
        new GL(randomNumber(CONSTANTS.MINX, CONSTANTS.MAXX),randomNumber(CONSTANTS.MINY, CONSTANTS.MAXY)),
       
      );

      props.player[0].coins =0;
      props.player[0].damage =1;
      props.player[0].food = 2;
      CB.level = 1;
      if(props.pearl.length !== 0){
      props.deletePearl(props.pearl[0])
      console.log('inside useEffect')
      }
      
      try{


        if(props.carnivore.length !== 0){
        for(let i =0; i< props.carnivore.length; i++){
          props.deleteCarnivore(props.carnivore[i]);
        }
      }
    }catch(e){}
    try{
        if(props.crumb.length !== 0){
        for(let i =0; i< props.crumb.length; i++){
          props.deleteCrumb(props.crumb[i]);
        }
      }
    }catch(e){}
      try{

        if(props.coin.length !== 0){
        for(let i =0; i< props.coin.length; i++){
          props.deleteCoin(props.coin[i]);
        }
      }
    }catch(e){}

      try{
        if(props.pearl.length !== 0){
          props.deletePearl(props.pearl[0])
          console.log('inside useEffect')
          }

         

      }catch(e){}
      

    };
    
  }, []);
  /* This function is used to create a new alien based on a random postion */
  const createMonster = (type) => {
   /* Type 1 is the octopus sprite */
    if(type === 1){
      let alienX = randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX)
      let alienY = randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)
      props.deleteText(props.text[0]) // deletes text component 
      props.createAlien({x:alienX, y:alienY,type:type});
      props.createPortal({x:alienX, y:alienY}); // creates a portal behind the alien
      // prevents multiple aliens being creates
      props.timer.stopTime(props.timer.timerID);
      props.timer.currentTime = 0;
      props.timer.startTime();

    }
    /* Alien sprite is rendered  */
    else if(type === 2){
      let alienX = randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX)
      let alienY = randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY)
      props.deleteText(props.text[0]) // deletes text component 

      props.createAlien({x:alienX, y:alienY,type:type});
      props.createPortal({x:alienX, y:alienY}); // creates a portal behind the alien
    }
  };
  /* Creates the text to be rendered on the screen 
  then sets the time to 31 or 97 seconds  */
  const createWarning = (type) => {
    if(type === 1){
      
      props.timer.stopTime(props.timer.timerID);
        props.createText()
        props.timer.currentTime = 31;
        props.timer.startTime();
    }

    else if (type === 2) {
      props.createText()
      GL.resetTimer();
      GL.timer.currentTime = 97
    }
  
    
  }

 

  /*
    Mouse listener
    This function is going to carry all of the logic for different click events 
    that occur in this game
*/
  const getClick = (event) => {


    let attackingMonster = {}; // stores information about the attacking monster

    // get click cooridnates
    locationMouseClick.y = event.clientY;
    setHasClicked(true);
    const mousePos = { x: event.clientX, y: event.clientY }; // sets the postion a user has clicked

    // check if the game is paused
    if(!props.player[0].pause){

    // check if mouse clicks are on monster
    attackingMonster = alienIsClicked(mousePos);
    // checks if a alien exists 
    if (attackingMonster.alienIsPresent) {
      // checks if the alien can exist depnding on the level passed into it
      if(levelParams.allowedAliens.canhaveAlien1 || levelParams.allowedAliens.canhaveAlien2 ){
        // shoot blaster
      props.createBlaster({ x: event.clientX, y: event.clientY });
      if (attackingMonster.isAttacking) {
        // damage monster
        damageMonster(attackingMonster, props);
        // change the position of x and y in the oppsite direction of the vector 
      const difference = [(mousePos.x - attackingMonster.alien.x),(mousePos.y - attackingMonster.alien.y)]
      // calcuates the magnitude of a vector
      let distance = Math.sqrt(
        Math.pow(difference[0], 2) +
          Math.pow(difference[1], 2)
      );
      // calcuates the unit vector between the position clicked and the alien multiply this by -1 so the direction is the oppsite of the way the alien is traving
      const unitV = [
        -1*(difference[0] / distance),
        -1*(difference[1] / distance),
      ];
      /* sets the postion that the alien should be push back to  */
      attackingMonster.alien.setPosition(
        attackingMonster.alien.x + (unitV[0]*10) * attackingMonster.alien.speed,
        attackingMonster.alien.y + (unitV[1]*10) * attackingMonster.alien.speed
      );
      }
    }
    } 
  
    
    else {
      // check if we clicked on a coin, or a pearl, otherwise deploy a crumb
      if (coinIsNotClicked(mousePos) && pearlIsNotClicked(mousePos)) {
        // check if crumbs are allowed to be deployed, based on crumb limit
        if (crumb.length < props.player[0].food) {
          props.createCrumb({ x: event.clientX, y: event.clientY,isSeahorse:false });
          props.player[0].removeCoins(5);
        }
      }
    }
  }

    setlocationMouseClick({ x: event.clientX, y: event.clientY }); // set the postion of the mouse stored in the use state hook
  };

  /*
This method checks whether a coin has been clicked or not.

Always assume we are clicking a coin (innocent until proven guilty)
*/
  const coinIsNotClicked = (mousePos) => {
    if(!props.player[0].pause){
    
    // go through all the coins
    for (let i = 0; i < props.coin.length; i++) {
      let currentCoin = props.coin[i];
      const coinPos = { x: currentCoin.x, y: currentCoin.y };
      // check if clicking on coin
      if (isboundingBoxCoords(mousePos, coinPos, 17)) {
        // delete coin
        props.deleteCoin(currentCoin);
        // increase money counter
        props.player[0].addCoins(currentCoin);

        return false; // guilty, we are clicking a coin!
      }
    }
  }
    return true; // not clicking on a coin
  };

  const pearlIsNotClicked = (mousePos) => {

    if(!props.player[0].pause){
    // checks that a pearl exists in the list
  if(props.pearl.length !== 0){
      let currentPearl = props.pearl[0];
      const pearlPos = { x: currentPearl.x, y: currentPearl.y };
      // check if clicking on pearl
      if (isboundingBoxCoords(mousePos, pearlPos, 20)) {
        // reset timer and delete a pearl
        currentPearl.resetTimer();
        props.deletePearl(currentPearl);
        props.clam[0].startTimer();
        props.clam[0].pearlCreated = false;
        // increase money counter
        props.player[0].addCoins(250);

        return false; // guilty, we are clicking a pearl!
      }
    }
    
  }
    return true; // not clicking on a pearl
  };

/* check if a player clicked on the alien */
  const alienIsClicked = (mousePos) => {
    
    const obj = {
      alien: null,
      isAttacking: false,
      alienIsPresent: false,
    };
    // if the list is not empty
    if (props.aliens.length > 0) {
      // loop though the list and check if any aliens have been pressed
      for (let alien of props.aliens) {
        let hasCollision = isboundingBoxCoords(
          mousePos,
          { x: alien.x, y: alien.y - 100 },
          25
        );
        obj.alienIsPresent = true;
        // if a collision has occured
        if (hasCollision) {
          
          obj.isAttacking = true; // set that a player is attacking a alien
          obj.alien = alien; // set alien to be a alien
        }
      }
    }
    return obj; // return the object
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
        player={props.player[0]}
      />
    );
  });
 /*
Map all the seahorse component sprites from our redux store to a variable to render
  */
  const seahorse = props.seahorse.map((ele, index) => {
    return (
      <Seahore
        key={index}
        seahorse={ele}
        crumb={props.crumb}
        createCrumb={props.createCrumb}
        player={props.player[0]}
      />
    );
  });

 /*
Map all the preggo component sprites from our redux store to a variable to render
  */
  const preggo = props.preggo.map((ele, index) => {
    return (
      <Preggo
        key={index}
        preggo={ele}
        deleteFish={props.deletePreggo}
        createFish={props.createFish}
        createCoin={props.createCoin}
        player={props.player[0]}
      />
    );
  });
 /*
Map all the swordfish component sprites from our redux store to a variable to render
  */
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
        player={props.player[0]}
      />
    );
  });

 /*
Map all the carnivore component sprites from our redux store to a variable to render
  */
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
        timer={props.timer}
        player={props.player[0]}
      />
    );
  });
 /*
Map all the crumb component sprites from our redux store to a variable to render
  */
  const crumb = props.crumb.map((ele, index) => (
    <Crumb key={index} crumb={ele} deleteCrumb={props.deleteCrumb} players={props.player[0]} />
  ));
   /*
Map all the snail component sprites from our redux store to a variable to render
  */
  const snail  = levelParams.allowedPets.canhaveSnail === true ?
  props.snail.map((ele, index) => (
    <Snail
      key={index}
      snail={ele}
      coin={props.coin}
      deleteCoin={props.deleteCoin}
      player={props.player}
      players={props.player[0]}
    />
  ))
  :null;
  
 /*
Map all the clam component sprites from our redux store to a variable to render
  */
  const clam = props.clam.map((ele, index) => (
    <Clam
      key={index}
      clam={ele}
      coin={props.coin}
      deleteCoin={props.deleteCoin}
      player={props.player}
      createPearl={props.createPearl}
      deletePearl={props.deletePearl}
      pearlList={props.pearl}
      players={props.player[0]}

    />
  ));
   /*
Map all the pearl component sprites from our redux store to a variable to render
  */
    const pearl = props.pearl.map((ele,index) => {
      return (
        <Pearl key={index} pearl={ele}  players={props.player[0]}/>
      )
    })
     /*
Map all the alien with type 1 component sprites from our redux store to a variable to render
  */
  const alien = levelParams.allowedAliens.canhaveAlien1 === true ?  props.aliens.filter((ele,index) => ele.type === 1 ).map((ele, index) => {
    return (
      <Alien
        key={index}
        goldfishList={totalFishList}
        deleteFish={props.deleteFish}
        deleteCarnivore={props.deleteCarnivore}
        alien={ele}
        players={props.player[0]}
      />
    );
  }) : null;
 /*
Map all the alien with type 2 component sprites from our redux store to a variable to render
  */
  const alien2 = levelParams.allowedAliens.canhaveAlien2 === true ? props.aliens.filter((ele,index) => ele.type === 2)
  .map((ele,index) =>{
    return (
      <Alien
        key={index}
        goldfishList={totalFishList}
        deleteFish={props.deleteFish}
        deleteCarnivore={props.deleteCarnivore}
        alien={ele}
        players={props.player[0]}
      />
    );
  }) : null;
  
   /*
Map all the text component sprites from our redux store to a variable to render
  */
  const text = (levelParams.allowedAliens.canhaveAlien1 === true || levelParams.allowedAliens.canhaveAlien2 === true) ? props.text.filter((ele,index) => index === 0).map((ele, index) => {
     return (
      <TextWarning
         key={index}
         deleteText={props.deleteText}
         text={ele}
         players={props.player[0]}
       />
     );
   }) : null;
   /*
Map all the portal component sprites from our redux store to a variable to render
  */
  const portal = (levelParams.allowedAliens.canhaveAlien1 === true || levelParams.allowedAliens.canhaveAlien2 === true) ?  props.portal.map((ele, index) => {
     return (
      <Portal
         key={index}
         deletePortal={props.deletePortal}
         portal={ele}
         players={props.player[0]}
       />
     );
   }) : null;

 /*
Map all the seahorse component sprites from our redux store to a variable to render
  */
  const blaster = (levelParams.allowedAliens.canhaveAlien1 === true || levelParams.allowedAliens.canhaveAlien2 === true) ? props.blaster.map((ele, index) => (
    <Blaster key={index} blaster={ele} deleteBlaster={props.deleteBlaster} players={props.player[0]}/>
  )) : null;

  // get coin components/sprites to render
  let coin;
  if (props.coin != undefined) {
    coin = props.coin.map((ele, index) => (
      <Coin key={index} coin={ele} deleteCoin={props.deleteCoin} players={props.player[0]} />
    ));
  }
  // if the total list is not of size zero
  if ( totalFishList.length > 0) {
    // This is the game loop where all the componets on screen are located 
    return (
      <React.Fragment>
        <Navbar levelParams={levelParams} {...props} />
        <Stage
          width={props.SCREEN_SIZE.x}
          height={props.SCREEN_SIZE.y-110}
          options={{ backgroundColor: 0x00ffff }}
          onClick={(e) => getClick(e)}
        >
          <Background background={background} /> 
          
          {(levelParams.allowedAliens.canhaveAlien1 === true || levelParams.allowedAliens.canhaveAlien2 === true)  ? portal : null}
          {levelParams.allowedAliens.canhaveAlien1 === true ? alien : null}
          {levelParams.allowedAliens.canhaveAlien2 === true ? alien2 : null}
          {(levelParams.allowedAliens.canhaveAlien1 === true || levelParams.allowedAliens.canhaveAlien2 === true) ?  blaster : null}
          
          {levelParams.allowedPets.canhaveClam === true ? clam : null}
          {levelParams.allowedPets.canhaveClam === true ? pearl : null}
          {levelParams.allowedPets.canhaveSnail === true ? snail : null}
          {coin}
          {crumb}
          {fish}
          
          {levelParams.allowedPets.canhaveSeahorse === true ? seahorse : null}
          {levelParams.allowedUpgrades.carnivore.canhave === true ? carnivore : null}
          {levelParams.allowedPets.canhavePreggo === true ? preggo : null}
          {levelParams.allowedPets.canhaveSwordFish === true ? swordfish : null}
          {levelParams.allowedAliens.canhaveAlien1 === true ? text : null}
        </Stage>

      </React.Fragment>
    );
  } else {
    return <GameOver {...props} />; // all fish are dead and game over screen will be rendered
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
    pearl:state.pearl_reducer,
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
  createClam,
  createPearl,
  deletePearl
})(Game);


/* this function is used and a player is attacking a monster 
reduce the monster health by how ever much the blaster is worth  */
function damageMonster(attackingMonster, props) {
  if (attackingMonster.alien.health - props.player[0].damage <= 0) {
    // delete the monster
    props.deleteAlien(attackingMonster.alien);
  } else {
   
      attackingMonster.alien.health = (attackingMonster.alien.health -  props.player[0].damage);
    

  }

}

import "./App.css";
import {Stage,Sprite,Graphics,useApp,Container,render,Application,  createFish,} from "@inlet/react-pixi";
import Game from "./game/game";
import UI from "./UI/ui";
import { useState } from "react";
import { connect } from "react-redux";
import {createPlayer,deletePlayer,resetPlayer} from "./actions/playerActions";
import {deleteFish,} from "./actions/fishActions";
import { resetCoin } from "./actions/coinActions";
import { Player } from "./model/player";
import { createTimer } from "./actions/timerAction";
import { Timer } from "./util/timer";
import LevelUp from "./UI/levelup";
import CharacterSelection from "./UI/charselection";
import { GoldFish } from "./model/Goldfish";
import {CONSTANTS} from './util/utilities'
const App = (props) => {
  // creates a more reuable way to add a constant
  const SCREEN_SIZE = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  // This functions returns a array of objects that are used to represent the coorindates of bubbles in the application
  const setupBubbles = () => {
    const p = [];
    for (let i = 0; i < 20; i++) {
      p.push({
        x: Math.floor(Math.random() * SCREEN_SIZE.x),
        y: Math.floor(Math.random() * SCREEN_SIZE.y - SCREEN_SIZE.y / 4),
      });
    }
    return p;
  };
    // This functions returns a array of objects that are used to represent the coorindates of kelp in the application
  const setupKelp = () => {
    const p = [];
    for (let i = 0; i < 10; i++) {
      p.push({
        x: Math.floor(Math.random() * SCREEN_SIZE.x),
        y:
          SCREEN_SIZE.y / 1.3 + Math.floor(Math.random() * (SCREEN_SIZE.y / 6)),
      });
    }
    return p;
  };
    // This functions returns a array of objects that are used to represent the coorindates of kelp in the application
  const setupKelp2 = () => {
    const p = [];
    for (let i = 0; i < 10; i++) {
      p.push({
        x: Math.floor(Math.random() * SCREEN_SIZE.x),
        y:
          SCREEN_SIZE.y / 1.3 + Math.floor(Math.random() * (SCREEN_SIZE.y / 6)),
      });
    }
    return p;
  };
  /* This is array objects which contains information for what each pet needs on the character selection screen */
  let unlockablePets = [
    {
      level:1,
      imgPath:'./assets/background/snail.svg',
      chosen: false,
      id: 'snail',
      label: 'roams around the bottom of your tank, catching any coins you may have missed'

    },
    {
      level:2,
      imgPath:'./assets/fish/seashell.svg',
      chosen: false,
      id: 'clam',
      label: 'produces pearls that you can click on for a hefty sum of money'
    },
    {
      level:3,
      imgPath:'./assets/fish/swordfish.svg',
      chosen: false,
      id: 'swordfish',
      label: 'helps you by attacking aliens when they appear'
    },
    {
      level:4,
      imgPath:'./assets/fish/fishpreg.svg',
      chosen: false,
      id: 'prego',
      label: 'helps populate your tank by giving birth to a new baby guppy every so often'
    },
    {
      level:5,
      imgPath:'./assets/fish/seahorse.svg',
      chosen: false,
      id: 'seahorse',
      label: 'gives you a hand in keeping your fish fed'
    }
  ]
  // creates a obect that contains all the information to render the background being the x and y coordinates 
  const background = {
    bubble: setupBubbles(),
    kelp: setupKelp(),
    kelp2: setupKelp2(),
  };
  // creates a object that contains all the information required for the first level to work properly
  const levelZero = {
    allowedPets: {
      canhaveSnail: false,
      canhaveClam: false,
      canhaveSwordFish: false,
      canhavePreggo: false,
      canhaveSeahorse: false,
    },
    allowedAliens: {
      canhaveAlien1: false,
      canhaveAlien2: false,
    },
    allowedUpgrades: {
      babyFish: {
        canhave: true,
        price: 100,
      },
      foodQuality: {
        canhave: false,
        price: 200,
      },
      foodqty: {
        canhave: false,
        price: 300,
      },
      carnivore: {
        canhave: false,
        price: 1000,
      },
      laserUpgrade: {
        canhave: false,
        price: 1000,
      },
      levelupCost: {
       canhave:true,
       price: 150,
      }
    },
    
  };
  // creates a object that contains all the information required for the second level to work properly
  const levelOne = {
    allowedPets: {
      canhaveSnail: true,
      canhaveClam: false,
      canhaveSwordFish: false,
      canhavePreggo: false,
      canhaveSeahorse: false,
    },
    allowedAliens: {
      canhaveAlien1: false,
      canhaveAlien2: false,
    },
    allowedUpgrades: {
      babyFish: {
        canhave: true,
        price: 100,
      },
      foodQuality: {
        canhave: true,
        price: 200,
      },
      foodqty: {
        canhave: true,
        price: 300,
      },
      carnivore: {
        canhave: false,
        price: 1000,
      },
      laserUpgrade: {
        canhave: false,
        price: 1000,
      },
      levelupCost: {
       canhave:true,
       price: 500,
      }
    },
    
  };
  // creates a object that contains all the information required for the thrid level to work properly
  const levelTwo = {
    allowedPets: {
      canhaveSnail: true,
      canhaveClam: true,
      canhaveSwordFish: false,
      canhavePreggo: false,
      canhaveSeahorse: false,
    },
    allowedAliens: {
      canhaveAlien1: true,
      canhaveAlien2: false,
    },
    allowedUpgrades: {
      babyFish: {
        canhave: true,
        price: 100,
      },
      foodQuality: {
        canhave: true,
        price: 200,
      },
      foodqty: {
        canhave: true,
        price: 300,
      },
      carnivore: {
        canhave: true,
        price: 1000,
      },
      laserUpgrade: {
        canhave: true,
        price: 1000,
      },
      levelupCost: {
       canhave:true,
       price: 2000,
      }
    },
    
  };
// creates a object that contains all the information required for the fourth level to work properly
  const levelThree = {
    allowedPets: {
      canhaveSnail: true,
      canhaveClam: true,
      canhaveSwordFish: true,
      canhavePreggo: false,
      canhaveSeahorse: false,
    },
    allowedAliens: {
      canhaveAlien1: true,
      canhaveAlien2: false,
    },
    allowedUpgrades: {
      babyFish: {
        canhave: true,
        price: 100,
      },
      foodQuality: {
        canhave: true,
        price: 200,
      },
      foodqty: {
        canhave: true,
        price: 300,
      },
      carnivore: {
        canhave: true,
        price: 1000,
      },
      laserUpgrade: {
        canhave: true,
        price: 1000,
      },
      levelupCost: {
       canhave:true,
       price: 3000,
      }
    },
    
  };
// creates a object that contains all the information required for the 5th level to work properly
  const levelFour = {
    allowedPets: {
      canhaveSnail: true,
      canhaveClam: true,
      canhaveSwordFish: true,
      canhavePreggo: true,
      canhaveSeahorse: false,
    },
    allowedAliens: {
      canhaveAlien1: false,
      canhaveAlien2: true,
    },
    allowedUpgrades: {
      babyFish: {
        canhave: true,
        price: 100,
      },
      foodQuality: {
        canhave: true,
        price: 200,
      },
      foodqty: {
        canhave: true,
        price: 300,
      },
      carnivore: {
        canhave: true,
        price: 1000,
      },
      laserUpgrade: {
        canhave: true,
        price: 1000,
      },
      levelupCost: {
       canhave:true,
       price: 5000,
      }
    },
    
  };
  // creates a object that contains all the information required for the 6th level to work properly
  const levelFive = {
    allowedPets: {
      canhaveSnail: true,
      canhaveClam: true,
      canhaveSwordFish: true,
      canhavePreggo: true,
      canhaveSeahorse: true,
    },
    allowedAliens: {
      canhaveAlien1: true,
      canhaveAlien2: true,
    },
    allowedUpgrades: {
      babyFish: {
        canhave: true,
        price: 100,
      },
      foodQuality: {
        canhave: true,
        price: 200,
      },
      foodqty: {
        canhave: true,
        price: 300,
      },
      carnivore: {
        canhave: true,
        price: 1000,
      },
      laserUpgrade: {
        canhave: true,
        price: 1000,
      },
      levelupCost: {
       canhave:true,
       price: 20000,
      }
    },
    
  };

  


  const locationMouseClick = { x: 0, y: 0 }; // initalizes coordinates of the mouse
  let hasClicked = false; // initalizes if a click has occured
  let [currentLevel, setCurrentLevel] = useState(0); // counter to keep track of which level the player is on 
  let [isLeveledUP, setIsLeveledUp] = useState(false); // boolean to make sure the level is set correctly 
  let [levelParams, setLevelParams] = useState({}); // object passed into react componenets that contains the game logic for that level
  let [levelSelectionScreen, setLevelSelectionScreen] = useState(false); // checks wheather on character selection screen or not 
  const [start, setStart] = useState(false); // boolean which is used to start the game
  const [needFish, setNeedFish] = useState(false); // boolean for checking if there is fish
  const [chosenPets, setChosenPets] = useState({}) // checks to see which pet is chosen by the user
  
  
  /*
  Register the mouse click x and y coordinated with a mouse listener
  */
  const getClick = (event) => {
    locationMouseClick.x = event.clientX;
    locationMouseClick.y = event.clientY;
    hasClicked = true;
  };
  // returns the x and y coordinates of a mouse click
  const getlocation = () => {
    return locationMouseClick;
  };

 


  // show UI on inisitial state
 
  // called when start is clicked
  const appStart = () => {
    setStart(true);
    GoldFish.startTimer(); // starts a timer used by the aliens 
    const p = new Player(); // creates a new player
    props.createPlayer(p); // passes playing into redux store 
    
    
    const timer = new Timer();
    // sets the level parameter objects based on the current level the player is at
    switch (currentLevel) {
      case 0:
        setLevelParams(levelZero)
        break;
      case 1:
        setLevelParams(levelOne)
        break;
      case 2:
        setLevelParams(levelTwo)
        break;
      case 3:
        setLevelParams(levelThree)
        break;
      case 4:
        setLevelParams(levelFour)
        break;
      case 5:
        setLevelParams(levelFive)
        break;
      default:
        setLevelParams(levelFive)
    }
    

    props.createTimer(timer); // passes the timer into the redux store to be used globally 
    timer.startTime();
  };

  /* Used to reset the game and the objects in the game 
  this will occur on a game over and when level is completed */
  const reset = () => {
    setStart(false);
    props.timer.stopTime();
    props.resetPlayer(1);
    setNeedFish(true);
    setIsLeveledUp(false);
    setLevelSelectionScreen(true)

    props.player[0].coins = 0;
    props.player[0].damage =1;
    props.player[0].food =1;
    GoldFish.level = 1;
  };

  /* Used for when the player completed the level
  sets the current level to true sets player params to default 
  increases the level count */
  const isLevelup = () => {
    if(!isLeveledUP){
      let cl = currentLevel;
      setCurrentLevel(cl+1)
      setIsLeveledUp(true)   
      setLevelSelectionScreen(true)   
      props.player[0].coins = 0;
      props.player[0].damage =1;
    }
    else{
      // setIsLeveledUp(false)
    }
  };
  // helper function to allow for the character selection screen to be rendered
  const isCharSelectScreen = () =>{
    setIsLeveledUp(false);
   setLevelSelectionScreen(true);
  //  setStart(false);
  }
  // this function was used to allow to modify the level parameters based on which pets were chosen by the user
  const charSelect = () =>{
    setIsLeveledUp(false)
    setLevelSelectionScreen(false)
    /* Based on the level currently, 
    the user chosen pets would rendered and used in the level following */
    switch (currentLevel) {
     
      case 1:
        levelOne.allowedPets.canhaveSnail = unlockablePets[0].chosen
       
        break;
        case 2:
        levelTwo.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelTwo.allowedPets.canhaveClam = unlockablePets[1].chosen
        break;
      case 3:
        
        levelThree.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelThree.allowedPets.canhaveClam = unlockablePets[1].chosen
        levelThree.allowedPets.canhaveSwordFish = unlockablePets[2].chosen
        break;
      case 4:
        
        levelFour.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelFour.allowedPets.canhaveClam = unlockablePets[1].chosen
        levelFour.allowedPets.canhaveSwordFish = unlockablePets[2].chosen
        levelFour.allowedPets.canhavePreggo = unlockablePets[3].chosen
        break;
      case 5:
    
        levelFive.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelFive.allowedPets.canhaveClam = unlockablePets[1].chosen
        levelFive.allowedPets.canhaveSwordFish = unlockablePets[2].chosen
        levelFive.allowedPets.canhavePreggo = unlockablePets[3].chosen
        levelFive.allowedPets.canhaveSeahorse = unlockablePets[4].chosen
        break;
      default:
        levelFive.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelFive.allowedPets.canhaveClam = unlockablePets[1].chosen
        levelFive.allowedPets.canhaveSwordFish = unlockablePets[2].chosen
        levelFive.allowedPets.canhavePreggo = unlockablePets[3].chosen
        levelFive.allowedPets.canhaveSeahorse = unlockablePets[4].chosen
        break;
    }
    appStart() // starts the game
  }


/* Renders the start game screen at the begining of the application */
  if (!isLeveledUP && !start && !levelSelectionScreen) {
    return (
      <div class="scrollable">
        <UI onClick={appStart} />
      </div>
    );
  } 
   /* Renders the game allowing for the player to play if the
 level up screen is false start game is true and levelselection screen is falsed 
 this implies that the user has all ready went to these screens of the game is just starting up
 or a game over occured */
  else if (!isLeveledUP && start && !levelSelectionScreen) {
    return (
      <>
       
        <Game
          hasClicked={hasClicked}
          posClicked={locationMouseClick}
          getClick={getlocation}
          background={background}
          playerList={props.player}
          SCREEN_SIZE={SCREEN_SIZE}
          rr={reset}
          needFish={needFish}
          isLevelup={isLevelup}
          levelParams={levelParams}
          
        />
      
      </>
    );
  } 
  /* Renders the Level up screen showing the pet just unlocked and 
  a button allowing the player to go to the character selection screen */
  else if (isLeveledUP) {
      
      return <LevelUp onClick={isCharSelectScreen} levelSelect={setLevelSelectionScreen} level={currentLevel}  />;
  }
  /* Renders the character selection for the user  */
  else if(levelSelectionScreen){
    return <CharacterSelection onClick={charSelect} levelParams={levelParams} currentLevel={currentLevel} unlockablePets={unlockablePets}/>
  }
  
 
  
};

/*
This maps the redux store state to the props to pass in a paramters
*/
const mapStateToProps = (state) => {
  return {
    player: state.player_reducer,
    timer: state.timer_reducer,
    
    //coin: state.coin_reducer,
  };
};

/*
Connect gathers the data from our redux store 
allowing us to modify the store as well as use the information from the store
*/
export default connect(mapStateToProps, {
  createPlayer,
  deletePlayer,
  createTimer,
  resetPlayer,
  deleteFish,
})(App);

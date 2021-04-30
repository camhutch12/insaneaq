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
const App = (props) => {
  const SCREEN_SIZE = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
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

  let unlockablePets = [
    {
      level:1,
      imgPath:'./assets/background/snail.svg',
      chosen: false,
      id: 'snail'
    },
    {
      level:2,
      imgPath:'./assets/fish/seashell.svg',
      chosen: false,
      id: 'clam'
    },
    {
      level:3,
      imgPath:'./assets/fish/swordfish.svg',
      chosen: false,
      id: 'swordfish'
    },
    {
      level:4,
      imgPath:'./assets/fish/fishpreg.svg',
      chosen: false,
      id: 'prego'
    },
    {
      level:5,
      imgPath:'./assets/fish/seahorse.svg',
      chosen: false,
      id: 'seahorse'
    }
  ]

  const background = {
    bubble: setupBubbles(),
    kelp: setupKelp(),
    kelp2: setupKelp2(),
  };
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
       price: 8000,
      }
    },
    
  };

  


  const locationMouseClick = { x: 0, y: 0 };
  let hasClicked = false;
  let [currentLevel, setCurrentLevel] = useState(0);
  let [isLeveledUP, setIsLeveledUp] = useState(false);
  let [levelParams, setLevelParams] = useState({});
  let [levelSelectionScreen, setLevelSelectionScreen] = useState(false);
  /*
  Register the mouse click x and y coordinated with a mouse listener
  */
  const getClick = (event) => {
    locationMouseClick.x = event.clientX;
    locationMouseClick.y = event.clientY;
    hasClicked = true;
  };

  const getlocation = () => {
    return locationMouseClick;
  };

 


  // show UI on inisitial state
  const [start, setStart] = useState(false);
  const [needFish, setNeedFish] = useState(false);
  const [chosenPets, setChosenPets] = useState({})
  // called when start is clicked
  const appStart = () => {
    setStart(true);
    const p = new Player();
    props.createPlayer(p);
    const timer = new Timer();

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
    

    props.createTimer(timer);
    timer.startTime();
  };

  const reset = () => {
    setStart(false);
    props.timer.stopTime();
    props.resetPlayer(1);
    setNeedFish(true);
    setIsLeveledUp(false);
  };

  const isLevelup = () => {
    if(!isLeveledUP){
      let cl = currentLevel;
      setCurrentLevel(cl+1)
      setIsLeveledUp(true)      
      props.player.coins = 0;
      setLevelSelectionScreen(true)
      
    }
    else{
      setIsLeveledUp(false)
      
      // appStart();
    }
  };

  const charSelect = () =>{
    setIsLeveledUp(false)
    switch (currentLevel) {
     
      case 1:
        levelOne.allowedPets.canhaveSnail = unlockablePets[0].chosen
       
        break;
        case 2:
        levelTwo.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelTwo.allowedPets.canhaveClam = unlockablePets[1].chosen
        console.log(unlockablePets[0].chosen)
        console.log(unlockablePets[1].chosen)
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
        console.log(unlockablePets[0].chosen)
        console.log(unlockablePets[1].chosen)
        console.log(unlockablePets[2].chosen)
        console.log(unlockablePets[3].chosen)
        console.log(unlockablePets[4].chosen)
        break;
      default:
        levelFive.allowedPets.canhaveSnail = unlockablePets[0].chosen
        levelFive.allowedPets.canhaveClam = unlockablePets[1].chosen
        levelFive.allowedPets.canhaveSwordFish = unlockablePets[2].chosen
        levelFive.allowedPets.canhavePreggo = unlockablePets[3].chosen
        levelFive.allowedPets.canhaveSeahorse = unlockablePets[4].chosen
        break;
    }
    appStart()
  }


  /* 
Renders either the game or the UI based on whether start was clicked.
Start button is defined in UI component 
 */
  if (!isLeveledUP && !start) {
    return (
      <div>
        <UI onClick={appStart} />
      </div>
    );
  } else if (!isLeveledUP && start) {
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
  else if(levelSelectionScreen){
    return <CharacterSelection onClick={charSelect} levelParams={levelParams} currentLevel={currentLevel} unlockablePets={unlockablePets}/>
  }
  
  else if (isLeveledUP) {
    return <LevelUp onClick={isLevelup} level={currentLevel}  />;
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
*/
export default connect(mapStateToProps, {
  createPlayer,
  deletePlayer,
  createTimer,
  resetPlayer,
  deleteFish,
})(App);

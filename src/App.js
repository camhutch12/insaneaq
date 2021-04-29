import "./App.css";
import {
  Stage,
  Sprite,
  Graphics,
  useApp,
  Container,
  render,
  Application,
} from "@inlet/react-pixi";
import Game from "./game/game";
import UI from "./UI/ui";
import { useState } from "react";
import { connect } from "react-redux";
import {
  createPlayer,
  deletePlayer,
  resetPlayer,
} from "./actions/playerActions";
import {
  createFish,
  deleteFish,
  resetFish,
  clearFish,
} from "./actions/fishActions";
import { resetCoin } from "./actions/coinActions";
import { Player } from "./model/player";
import { createTimer } from "./actions/timerAction";
import { Timer } from "./util/timer";
import LevelUp from "./UI/levelup";
const App = (props) => {
  const SCREEN_SIZE = {
    x: window.innerWidth,
    y: window.innerHeight - 100,
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

  // called when start is clicked
  const appStart = () => {
   console.log(currentLevel)
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
      //setIsLeveledUp(true);
      props.clearFish();
      
    }
    else{
      setIsLeveledUp(false)
      console.log('is level up true')
      appStart();
    }
  };

  /* 
Renders either the game or the UI based on whether start was clicked.
Start button is defined in UI component 
 */
  console.log("Rerender app class");
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
  } else if (isLeveledUP) {
    return <LevelUp onClick={isLevelup} />;
  }
};

/*
This maps the redux store state to the props to pass in a paramters
*/
const mapStateToProps = (state) => {
  return {
    player: state.player_reducer,
    timer: state.timer_reducer,
    fish: state.fish_reducer,
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
  //createFish,
  deleteFish,
  clearFish,
  //resetFish,
  //resetCoin,
})(App);

import "./App.css";
import {
  Stage,
  Sprite,
  Graphics,
  useApp,
  Container,
  render,
} from "@inlet/react-pixi";
import Game from "./game/game";
import UI from "./UI/ui";
import { useState } from "react";
import { connect } from "react-redux";
import { createPlayer, deletePlayer } from "./actions/playerActions";
import GoldFish from "./Fish/goldfish/goldfish";
import { Player } from "./model/player";
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
  const locationMouseClick = { x: 0, y: 0 };
  let hasClicked = false;
  const positons = [
    {
      pos: {
        x: Math.floor(Math.random() * window.innerWidth + 1),
        y: Math.floor(Math.random() * window.innerWidth + 1),
      },
      food: { x: locationMouseClick.x, y: locationMouseClick.y },
    },
  ];

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
const [start,setStart] = useState(false);

// called when start is clicked
  const appStart = () => {
    setStart(true)
    const p = new Player();
    props.createPlayer(p);
  };

/* 
Renders either the game or the UI based on whether start was clicked.
Start button is defined in UI component 
 */
  return (
    <div>
      {start ? (
        <Game
          hasClicked={hasClicked}
          posClicked={locationMouseClick}
          getClick={getlocation}
          background={background}
          playerList={props.player}
          SCREEN_SIZE={SCREEN_SIZE}
        />
      ) : (
        <UI onClick={appStart} />
      )}
    </div>
  );
};

/*
This maps the redux store state to the props to pass in a paramters
*/
const mapStateToProps = (state) => {
  return {
    player: state.player_reducer,
  };
};

/*
Connect gathers the data from our redux store
*/
export default connect(mapStateToProps, {
  createPlayer,
  deletePlayer,
})(App);

import React, { useEffect, useState } from "react";
import classes from "./levelup.module.css";

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a simple button that registers whether the user has clicked. 
If the button is clicked a boolean returns true in the callback, which starts the game
*/
const LevelUp = ({ onClick, ...props }) => {
  let img = "";
  let style = "";
  switch (props.level) {
    case 0:
      break;
    case 1:
      img = "../assets/background/snail.svg";
      style = classes.Levelup__snail;
      break;
    case 2:
      img = "../assets/background/shell.svg";
      style = classes.levelup__shell;
      break;
    case 3:
      img = "../assets/fish/swordfish.svg";
      style = classes.levelup__shell;
      break;
    case 4:
      img = "../assets/fish/fishpreg.svg";
      style = classes.levelup__shell;
      break;
    case 5:
      img = "../assets/fish/seahorse.svg";
      break;
    default:
      img = "../assets/background/snail.svg";
      break;
  }

  return (
    <div className={classes.levelup__container}>
      <h1 className={classes.levelup__title}>Level Complete</h1>
      <h2 className={classes.levelup__titlesub}>You unlocked The Snail</h2>
      <img className={style} src={img}></img>
      <button className={classes.levelup__button} onClick={onClick}>
        Next Level
      </button>
    </div>
  );
};

export default LevelUp;

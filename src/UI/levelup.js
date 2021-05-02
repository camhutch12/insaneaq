import React, { useEffect, useState } from "react";
import classes from "./levelup.module.css";

/*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

/*
This component is a which shows the user that they have level up the egg is clicked . 
If the button is clicked a a callback is called which works to render the following character selection screen
*/
const LevelUp = ({ onClick, ...props }) => {
  let img = "";
  let style = "";
  let name = ""
  let label= 'roams around the bottom of your tank, catching any coins you may have missed'

  /* For change different properties that a user can see and also to change the css 
  this depends on which level the user is on */
  switch (props.level) {
    case 0:
      break;
    case 1:
      img = "../assets/background/snail.svg";
      style = classes.Levelup__snail;
      name = "Snail"
      label= 'roams around the bottom of your tank, catching any coins you may have missed'
      break;
    case 2:
      img = "../assets/background/shell.svg";
      style = classes.levelup__shell;
      name = "Shell"
      label= 'produces pearls that you can click on for a hefty sum of money'
      break;
    case 3:
      img = "../assets/fish/swordfish.svg";
      style = classes.levelup__shell;
      name = "Swordfish"
      label= 'helps you by attacking aliens when they appear'
      break;
    case 4:
      img = "../assets/fish/fishpreg.svg";
      style = classes.levelup__prego;
      name = "Preggo"
      label= 'helps populate your tank by giving birth to a new baby guppy every so often'
      break;
    case 5:
      img = "../assets/fish/seahorse.svg";
      name="Seahorse"
      label= 'gives you a hand in keeping your fish fed'
      break;
    default:
      img = "../assets/background/snail.svg";
      break;
  }

  return (
    <div className={classes.levelup__container}>
      <h1 className={classes.levelup__title}>Level Complete</h1>
      <h2 className={classes.levelup__titlesub}>You unlocked The {name}</h2>
      <img className={style} src={img}></img>
      <p className={classes.levelup__text}>{label}</p>
      <button className={classes.levelup__button} onClick={ onClick}>
        Go To Characters Selection
      </button>
    </div>
  );
};

export default LevelUp;

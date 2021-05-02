import { v4 as uuidv4 } from "uuid"
import { Timer } from "../util/timer";
import { GoldFish } from "./Goldfish";

class Clam {
  id;
  direction:number[] = [];
  difference:number[]  = [];
  unitV:number[]  = [];
  fishList:any[] = [];
  x:number;
  y:number;
  fish:any;
  hasFishToChase = false;
  isRandom = true;
  isJustCreated = true;

  totalEatenFood = 0;
  size = 1;
  speed;
  hunger = 1;
  health = 3;
  img:String = "../assets/background/shellfish.svg";
  timer:Timer;
  pearlCreated = false;
  constructor(x:number, y:number) {
    this.id = uuidv4();
    this.x = x;
    this.y = y;
    // make the drop rate unique
    this.size = 1;
    this.speed = 3;
    this.timer = new Timer()
    this.timer.startTime()
    this.pearlCreated = false;
    this.isJustCreated = true;
    

}
// initialize position

  setPosition(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  startTimer(){
    this.timer.startTime();
  }

  getCurrentTimer(){
    return this.timer.currentTime;
  }

  resetTimer(){
    this.timer.stopTime()
    this.timer.currentTime =0;
  }

  stopTimer(){
    this.timer.stopTime()
}
 

}

export { Clam };

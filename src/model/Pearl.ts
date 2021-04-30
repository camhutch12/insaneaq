import { v4 as uuidv4 } from "uuid";
import { Timer } from "../util/timer";
/*
This class acts as a model for the coin data
*/
export class Pearl {
  id;
  x;
  y;
  threshold;
  type = 0;
  img:string = '../assets/drops/pearl.svg'
  timer:Timer;
  size;
  constructor(x:number, y:number) {
    this.id = uuidv4();
    this.x = x;
    this.y = y;
    this.threshold = 0;
    this.timer = new Timer()
    this.timer.startTime();
    this.size = 0.2;
  }

  setPos(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  setThreshold(value:number) {
    this.threshold = value;
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
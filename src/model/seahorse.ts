import { v4 as uuidv4 } from "uuid";
import {Alien} from './alien'
import {Timer} from '../util/timer'
class Seahorse {

  id;
  direction:number[] = [];
  difference:number[] = [];
  unitV:number[] = [];
  x = -1;
  y = -1;
  alien:any = null;
  alienList:any = [];
  isRandom = true;
  isJustCreated = true;
  isRandomCurrently = false;
  size = 0.5;
  hungerTimer = 0;
  coinDropTimer = 0;
  dropRate = 500;
  speed
  img:string = '';
  timer:Timer

  constructor(x:number, y:number) {

    this.id = uuidv4();;
    this.x = x;
    this.y = y;
    this.timer = new Timer();
    this.timer.startTime();
    // make the drop rate unique
    this.dropRate = 500 + Math.random() * 500;
    this.size = 0.5;
    this.speed = 2
    
    // generate random direction
    // generate random point
    this.isJustCreated = true;
    this.isRandom = true;
    this.direction[0] = Math.random() * window.innerWidth-30;
    this.direction[1] = Math.random() * window.innerHeight-150;
    
    // calculate the difference to random point (unit vector)
    this.difference[0] = this.direction[0] - x;
    this.difference[1] = this.direction[1] - y;
    let distance = Math.sqrt(
        Math.pow(this.difference[0], 2) +
          Math.pow(this.difference[1], 2)
    );
    this.unitV = [
      this.difference[0] / distance,
      this.difference[1] / distance,
    ];
    
    // initialize position
  }

  setPosition(x:number, y:number) {
    this.x = x;
    this.y = y;
  }

  resetDirection() {
    if (this.isRandom && !this.isJustCreated && !this.isRandomCurrently) {
      this.isRandomCurrently = true;
      this.direction[0] = Math.random() * window.innerWidth;
      this.direction[1] = Math.random() * window.innerHeight;
      // calculate the difference to random point (unit vector)
      this.difference[0] = this.direction[0] - this.x;
      this.difference[1] = this.direction[1] - this.y;
      let distance = Math.sqrt(
        Math.pow(this.difference[0], 2) +
          Math.pow(this.difference[1], 2)
      );
       this.unitV = [
        this.difference[0] / distance,
        this.difference[1] / distance,
      ];
    }
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


  setCoinDrop(value:any) {
    this.coinDropTimer = value;
  }
}
export {Seahorse}

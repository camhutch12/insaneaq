import { v4 as uuidv4 } from "uuid"
import { GoldFish } from "./Goldfish";
import {CONSTANTS, randomNumber} from '../util/utilities'
import { Timer } from "../util/timer";
class Alien {
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
  isRandomCurrently = false;
  totalEatenFood = 0;
  size = 1;
  dropRate = 500;
  speed;
  hunger = 1;
  health = 5;
  type:number;
  img:string;
  timer:Timer
  constructor(x:number, y:number,type:number) {
    this.type = type;
    this.img = ""
    if(this.type === 1){
      this.img = "../assets/alien/octo.svg"
      this.speed = 3;
      this.health = 5
    }
    else if(this.type === 2){
      this.img = "../assets/alien/aliengreen.svg"
      this.speed = 4;
      this.health=10;
    }
    this.timer = new Timer()
    this.id = uuidv4();
    this.x = x;
    this.y = y;
    // make the drop rate unique
    this.dropRate = 500 + Math.random() * 500;
    // generate random direction
    // generate random point
    this.isJustCreated = true;
    this.isRandom = true;
    this.direction[0] = Math.random() * window.innerWidth - 30;
    this.direction[1] = Math.random() * window.innerHeight - 150;
    // calculate the difference to random point (unit vector)
    this.difference[0] = this.direction[0] - x;
    this.difference[1] = this.direction[1] - y;
    let distance = Math.sqrt(
      Math.pow(this.difference[0], 2) + Math.pow(this.difference[1], 2)
    );
    this.unitV = [this.difference[0] / distance, this.difference[1] / distance];

}
// initialize position

  setPosition(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
  setFishList(fish:GoldFish[]) {
    this.fishList = [...fish];
  }

  getClosestFish() {
    let dist1 = -1;
    let dist2 = -1;

    // go through all the crumbs
    for (let fish of this.fishList) {
      if (this.fish == null) {
        this.fish = fish;
      } else {
        dist1 = Math.sqrt(
          Math.pow(this.fish.x - this.x, 2) +
            Math.pow(this.fish.y - this.y, 2)
        );
        dist2 = Math.sqrt(
          Math.pow(fish.x - this.x, 2) + Math.pow(fish.y - this.y, 2)
        );
        // check if this fish is closer
        if (dist1 > dist2) {
          this.fish = fish;
        }
      }
    }
  }

  resetDirection() {
    if (this.isRandom && !this.isJustCreated && !this.isRandomCurrently) {
      this.isRandomCurrently = true;
      this.direction[0] = randomNumber(CONSTANTS.MINX,CONSTANTS.MAXX);
      this.direction[1] = randomNumber(CONSTANTS.MINY,CONSTANTS.MAXY);
      // calculate the difference to random point (unit vector)
      this.difference[0] = this.direction[0] - this.x;
      this.difference[1] = this.direction[1] - this.y;
      let distance = Math.sqrt(
        Math.pow(this.difference[0], 2) + Math.pow(this.difference[1], 2)
      );
      this.unitV = [
        this.difference[0] / distance,
        this.difference[1] / distance,
      ];
    }
  }

  setHasFishToChase(totalFishList:GoldFish[]) {

      // check if crumbs exist
      if (totalFishList.length > 0) {
        this.isRandom = false;
        this.hasFishToChase = true;
        this.isJustCreated = false;
        this.isRandomCurrently = false;
        return true;
      } else {
        this.isRandom = true;
        this.hasFishToChase = false;
        return false;
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

  stopTimer(){
      this.timer.stopTime()
  }

}

export { Alien };

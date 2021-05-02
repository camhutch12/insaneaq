import { v4 as uuidv4 } from "uuid";
import {Alien} from './alien'
import {isboundingBoxCoords} from '../util/utilities'
class SwordFish {

  id;
  direction:number[] = [];
  difference:number[] = [];
  hasAliensToChase = false;
  unitV:number[] = [];
  x = -1;
  y = -1;
  alien:any = null;
  alienList:any = [];
  isRandom = true;
  isJustCreated = true;
  isRandomCurrently = false;
  totalEatenFood = 0;
  size = 1;
  hungerTimer = 0;
  coinDropTimer = 0;
  dropRate = 500;
  speed
  img:string = '';


  constructor(x:number, y:number) {

    this.id = uuidv4();;
    this.x = x;
    this.y = y;
    
    // make the drop rate unique
    this.dropRate = 500 + Math.random() * 500;
    this.size = 1;
    this.speed = 3
    
    // generate random direction
    // generate random point
    this.isJustCreated = true;
    this.isRandom = true;
    this.direction[0] = Math.random() * window.innerWidth-30;
    this.direction[1] = Math.random() * window.innerHeight-50;
    
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
  setAlienList(c:Alien[]) {
    this.alienList = [...c];
  }


  getClosestAlien() {
    let dist1 = -1;
    let dist2 = -1;

    // go through all the crumbs
    for (let c of this.alienList) {
      if (this.alien == null) {
        this.alien = c;
      } else {
        dist1 = Math.sqrt(
          Math.pow(this.alien.x - this.x, 2) +
            Math.pow(this.alien.y - this.y, 2)
        );
        dist2 = Math.sqrt(
          Math.pow(c.x - this.x, 2) + Math.pow(c.y - this.y, 2)
        );
        // check if this alien is closer
        if (dist1 > dist2) {
          this.alien = c;
        }
      }
    }
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

  setHasAliensToChase(totalAlienList:Alien[]) {
    // check if hungry
    
      // check if crumbs exist
      if (totalAlienList.length > 0) {
        this.isRandom = false;
        this.hasAliensToChase = true;
        this.isJustCreated = false;
        this.isRandomCurrently = false;
        return true;
      } else {
        this.isRandom = true;
        this.hasAliensToChase = false;
        return false;
      }
    
  }

  setCoinDrop(value:any) {
    this.coinDropTimer = value;
  }
}
export {SwordFish}

import { v4 as uuidv4 } from "uuid";
import {Crumb} from './crumb'
class Carnivore {

  id;
  direction:number[] = [];
  x = -1;
  y = -1;
  difference:number[] = [];
  crumb:Crumb|null = null;
  crumbList:Crumb[] = [];
  hasCrumbsToChase:boolean = false;
  isRandom = true;
  isJustCreated = true;
  isRandomCurrently = false;
  totalEatenFood = 0;
  size = 0.4;
  unitV:number[] = [];
  hungerTimer = 0;
  coinDropTimer = 0;
  dropRate = 500;
  speed;
  hunger = 1;

  constructor(x:number, y:number) {
    this.id = uuidv4();;
    this.x = x;
    this.y = y;
    this.totalEatenFood = 0;
    // make the drop rate unique
    this.dropRate = 500 + Math.random() * 500;
    this.size = 0.4;
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
  setCrumbList(c:Crumb[]) {
    this.crumbList = [...c];
  }

  setHungerTimer(value:number) {
    this.hungerTimer = value;
  }

  // (0 is no hunger)
  // (1 searches for food)
  // (2 is yellow)
  // (3 is dead)
  setHunger(value:number) {
    this.hunger = value;
    this.hungerTimer = 0; // reset timer
  }

  setCoinDrop(value:number) {
    this.coinDropTimer = value;
  }

  
  getClosestCrumb() {
    let dist1 = -1;
    let dist2 = -1;

    // go through all the crumbs
    for (let c of this.crumbList) {
      if (this.crumb == null) {
        this.crumb = c;
      } else {
        dist1 = Math.sqrt(
          Math.pow(this.crumb.x - this.x, 2) +
            Math.pow(this.crumb.y - this.y, 2)
        );
        dist2 = Math.sqrt(
          Math.pow(c.x - this.x, 2) + Math.pow(c.y - this.y, 2)
        );
        // check if this crumb is closer
        if (dist1 > dist2) {
          this.crumb = c;
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

  setHasCrumbsToChase(totalCrumbList:Crumb[]) {
    // check if hungry
    if (this.hunger > 0 && this.hunger < 3) {
      // check if crumbs exist
      if (totalCrumbList.length > 0) {
        this.isRandom = false;
        this.hasCrumbsToChase = true;
        this.isJustCreated = false;
        this.isRandomCurrently = false;
        return true;
      } else {
        this.isRandom = true;
        this.hasCrumbsToChase = false;
        return false;
      }
    }
  }


}

export { Carnivore };

import { v4 as uuidv4 } from "uuid"
import { GoldFish } from "./Goldfish";

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
  health = 1;

  constructor(x:number, y:number) {
    this.id = uuidv4();
    this.x = x;
    this.y = y;
    this.totalEatenFood = 0;
    // make the drop rate unique
    this.dropRate = 500 + Math.random() * 500;
    this.size = 3;
    this.speed = 3;
    
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

  // setHungerTimer(value) {
  //   this.hungerTimer = value;
  // }

  // (0 is no hunger)
  // (1 searches for food)
  // (2 is yellow)
  // (3 is dead)
  // setHunger(value) {
  //   this.hunger = value;
  //   this.hungerTimer = 0; // reset timer
  // }

  // setCoinDrop(value) {
  //   this.coinDropTimer = value;
  // }

  increaseSize() {
    if (this.totalEatenFood >= 8) {
      this.size = 0.6;
    } else if (this.totalEatenFood >= 4) {
      this.size = 0.4;
    } else {
      this.size = 0.2;
    }
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
      this.direction[0] = Math.random() * window.innerWidth;
      this.direction[1] = Math.random() * window.innerHeight;
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
    // check if hungry
    if (this.hunger > 0 && this.hunger < 3) {
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
  }

  // setCoinDrop(value:any) {
  //   this.coinDropTimer = value;
  // }
}

export { Alien };

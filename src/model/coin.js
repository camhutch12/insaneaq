import { v4 as uuidv4 } from "uuid";
/*
This class acts as a model for the coin data
*/
export class Coin {
  id;
  x;
  y;
  threshold;
  type = 0;

  constructor(x, y, type) {
    this.id = uuidv4();
    this.x = x;
    this.y = y;
    this.threshold = 0;
    this.type = type;
  }

  setPos(x, y) {
    this.x = x;
    this.y = y;
  }

  setThreshold(value) {
    this.threshold = value;
  }

}

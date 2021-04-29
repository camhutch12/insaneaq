import { v4 as uuidv4 } from 'uuid';

class Text {

  x:number;
  y:number;
  size = 0.25;
  counter = 0;
  limit = 300;
  id;

  // initialize position
  constructor(x:number, y:number) {

    this.x = x;
    this.y = y;
    this.size = 0.25;
    this.counter = 0;
    this.limit = 300;
    this.id = uuidv4();

}

increaseCounter(value:number) {
    this.counter = value;
}

  setPosition(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
 

  decreaseSize(value:number) {
      this.size = value;
  }
  
}
export { Text };

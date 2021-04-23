import { v4 as uuidv4 } from 'uuid';

export class Crumb{
    x;
    y;
    id;
    threshold;
    constructor(x,y){
        this.id = uuidv4();;
        this.x = x;
        this.y = y;
        this.threshold =0;
    }

    setPos(x,y){
        this.x = x;
        this.y = y;
    }

    setThreshold(value) {
        this.threshold = value;
      }
    
      setCoinState(value) {
        this.type = value;
      }
}
import { v4 as uuidv4 } from 'uuid';

 /*
Written By:
Daniel Gannage (6368898)
Cameron Hutchings (6427892)
*/

export class Blaster{
    x;
    y;
    id;
    threshold;
    scale;
    constructor(x,y){
        this.id = uuidv4();;
        this.x = x;
        this.y = y;
        this.threshold = 0;
        this.scale = 0;
    }

    setPos(x,y){
        this.x = x;
        this.y = y;
    }

    setScale(value){
        this.scale = value;
    }

    setThreshold(value) {
        this.threshold = value;
      }
    
      setCoinState(value) {
        this.type = value;
      }
}
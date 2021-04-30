import { v4 as uuidv4 } from 'uuid';

export class Crumb{
    x;
    y;
    id;
    threshold;
    static level = 1;
    value;
    img;
    constructor(x,y,value){
      
      this.value = value
        this.id = uuidv4();
        this.x = x;
        this.y = y;
        this.threshold =0;
        if(this.value === 1){
          this.img = '../../assets/drops/crumb.svg'
        }
        else if(this.value === 2){
          this.img = '../../assets/drops/crumb.svg'
          
        }
        else if(this.value >= 3){
          this.img = '../../assets/drops/crumb.svg'
        }
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
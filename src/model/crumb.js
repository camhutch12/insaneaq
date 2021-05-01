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
          this.img = '../../assets/drops/fishfood.svg'
          
        }
        else if(this.value >= 3){
          this.img = '../../assets/drops/pill.svg'
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

      static getCrumbImage(){
        if(Crumb.level === 1){
          
          return "../assets/drops/crumb.svg"
        }
        else if(Crumb.level === 2){
          
          return "../assets/drops/fishfood.svg"
          
        }
        else if(Crumb.level >= 3){
          
          return "../assets/drops/pill.svg"
        }
        else{
          return ".../../assets/drops/fishfood.svg"

        }
      }
}
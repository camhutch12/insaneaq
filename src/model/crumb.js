import { v4 as uuidv4 } from 'uuid';

export class Crumb{
    x;
    y;
    id;
    constructor(x,y){
        this.id = uuidv4();;
        this.x = x;
        this.y = y;
    }

    setPos(x,y){
        this.x = x;
        this.y = y;
    }
}
export class Crumb{
    x;
    y;
    id;
    constructor(x,y){
        this.id = Math.floor(Math.random() * 10000);
        this.x = x;
        this.y = y;
    }

    setPos(x,y){
        this.x = x;
        this.y = y;
    }
}
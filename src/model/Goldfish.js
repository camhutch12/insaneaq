class GoldFish{
    static  count = 0;
    direction = []
    x = -1;
    y = -1;
    constructor(x,y){
        this.count++;
        this.x = x;
        this.y = y;
        
        
    }

    getDirection(){
        return this.direction;
    }

    setDirection(direction){
        this.direction = direction;
    }

    setPos(x,y){
        this.x = x;
        this.y = y;
    }
}

export {GoldFish}
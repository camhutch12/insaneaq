class GoldFish{
    
    static  count = 0;
    direction = []
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
}

export {GoldFish}
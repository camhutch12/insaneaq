class GoldFish{
    
    static  count = 0;
    direction = []
    position = []
    difference = []

    constructor(x,y){
        this.count++;
        this.x = x;
        this.y = y;
        
        // generate random direction
        
        // generate random point
        this.direction[0] = Math.random() * window.innerWidth;
        this.direction[1] = Math.random() * window.innerHeight;
        // calculate the difference to random point (unit vector)
        this.difference[0] = this.direction[0] - x;
        this.difference[1] = this.direction[1] - y;
        // initialize position
        this.position[0] = x;
        this.position[1] = y;

    }

    getDirection(){
        return this.direction;
    }

    setDirection(direction){
        this.direction = direction;
    }

    getPosition(){
        return this.position;
    }

    setPosition(x,y){
        this.position[0] = x;
        this.position[1] = y;
    }

    getDifference(){
        return this.difference;
    }

    setDifference(difference){
        this.difference = difference;
    }

    
}

export {GoldFish}
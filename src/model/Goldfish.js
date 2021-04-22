class GoldFish{
    
    static  count = 0;
    direction = []
    x = -1;
    y = -1;
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
        this.x = x;
        this.y = y;
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
    }

    
}

export {GoldFish}
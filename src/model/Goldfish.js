class GoldFish{
    
    static  count = 0;
    direction = []
    x = -1;
    y = -1;
    position = []
    difference = []
    crumb= null;
    crumbList = [];
    hasCrumbsToChase


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
   
    getPosition(){
        return this.position;
    }

    setPosition(x,y){
        this.x = x;
        this.y = y;
    }
    setCrumbList(c){
        this.crumbList = [...c]
    }

    getClosestCrumb(){
        let dist1  = -1
        let dist2 = -1
       
        for(let c of this.crumbList){
            if(this.crumb == null){
                this.crumb = c
            }
            else{
                 dist1 = Math.sqrt(Math.pow(this.crumb.x - this.x,2) +Math.pow(this.crumb.y - this.y,2))
                 dist2 = Math.sqrt(Math.pow(c.x - this.x,2) +Math.pow(c.y - this.y,2))
                if(dist1 > dist2){
                    this.crumb = c
                }
                
            }
        }
        
        
    }

    resetDirection(){
        this.direction[0] = Math.random() * window.innerWidth;
        this.direction[1] = Math.random() * window.innerHeight;
        // calculate the difference to random point (unit vector)
        this.difference[0] = this.direction[0] - this.x;
        this.difference[1] = this.direction[1] - this.y;
    }


    setHasCrumbsToChase(totalCrumbList){
            if(totalCrumbList > 0){
                this.hasCrumbsToChase = true
                return  true;
            }
            else{
                this.hasCrumbsToChase = false;
                return false;
            }
    }
 
}

export {GoldFish}
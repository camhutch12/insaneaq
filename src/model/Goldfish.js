

class GoldFish {
    static count = 0;

    direction = []
    x = -1;
    y = -1;
    difference = []
    crumb = null;
    crumbList = [];
    hasCrumbsToChase
    isRandom = true;
    isJustCreated = true;
    isRandomCurrently = false;
    totalEatenFood = 0;
    size = 0.2;

    hungerTimer = 0;
    coinDropTimer = 0;
    dropRate = 500;

    constructor(x, y) {

        this.count++;
        this.x = x;
        this.y = y;
        this.totalEatenFood =0;
        // make the drop rate unique
        this.dropRate = 500+Math.random()*500;
        this.size = 0.2;


        // generate random direction
        // generate random point
        this.isJustCreated = true;
        this.isRandom = true;
        this.direction[0] = Math.random() * window.innerWidth;
        this.direction[1] = Math.random() * window.innerHeight;
        // calculate the difference to random point (unit vector)
        this.difference[0] = this.direction[0] - x;
        this.difference[1] = this.direction[1] - y;
        // initialize position
        this.x = x;
        this.y = y;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    setCrumbList(c) {
        this.crumbList = [...c]
    }

    setHunger(value){
        this.hungerTimer = value;
    }

    setCoinDrop(value){
        this.coinDropTimer = value;
    }

    increaseSize(){
        if(this.totalEatenFood >=6 ){
            this.size = 0.6
        }
        else if(this.totalEatenFood >= 3){
            this.size = 0.4
        }
        else{
            this.size = 0.2
        }
    }
    
    getClosestCrumb(){
        let dist1  = -1
        let dist2 = -1

        // go through all the crumbs
        for (let c of this.crumbList) {
            if (this.crumb == null) {
                this.crumb = c
            }
            else {
                dist1 = Math.sqrt(Math.pow(this.crumb.x - this.x, 2) + Math.pow(this.crumb.y - this.y, 2))
                dist2 = Math.sqrt(Math.pow(c.x - this.x, 2) + Math.pow(c.y - this.y, 2))
                // check if this crumb is closer
                if (dist1 > dist2) {
                    this.crumb = c
                }
            }
        }
        

    }

    resetDirection() {
        if (this.isRandom && !this.isJustCreated && !this.isRandomCurrently) {
            this.isRandomCurrently = true
            this.direction[0] = Math.random() * window.innerWidth;
            this.direction[1] = Math.random() * window.innerHeight;
            // calculate the difference to random point (unit vector)
            this.difference[0] = this.direction[0] - this.x;
            this.difference[1] = this.direction[1] - this.y;
        }
    }


    setHasCrumbsToChase(totalCrumbList) {
        if (totalCrumbList.length > 0) {
            this.isRandom = false;
            this.hasCrumbsToChase = true
            this.isJustCreated = false;
            this.isRandomCurrently = false;
            return true;
        }
        else {
            this.isRandom = true;
            this.hasCrumbsToChase = false;
            return false;
        }
    }

    setHunger(value) {
        this.hungerTimer = value;
    }

    setCoinDrop(value) {
        this.coinDropTimer = value;
    }


}

export { GoldFish }
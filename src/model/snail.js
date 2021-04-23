import { snail_reducer } from "../reducers/snailreducer";

 class Snail{
    direction = []
    x = -1;
    y = -1;
    difference = []
    coin = null;
    coinList = [];
    hascoinsToChase
    isRandom = true;
    isJustCreated = true;
    isRandomCurrently = false;
    hungerTimer = 0;
    coinDropTimer = 0;
    dropRate = 500;
    unitVector;
    goLeft;
    goRight;
    speed
    constructor(x,y){
 
        // initialize position
        this.x = x;
        this.y = window.innerHeight-150;
        this.speed = 0.5;
        // make the drop rate unique
        // this.dropRate = 500+Math.random()*500;
        // generate random direction
        this.goLeft = true;
        this.goRight = false;
        // generate random point
        this.isJustCreated = true;
        this.isRandom = true;
        this.direction[0] = Math.random() * window.innerWidth-30;
        // calculate the difference to random point (unit vector)
        this.difference[0] = this.direction[0] - x;
        let dist = Math.sqrt(Math.pow(this.difference[0],2))
        this.unitVector = [this.difference[0]/dist]
        
    }


    setPosition(x) {
        this.x = x;
      
    }
    setCoinList(c) {
        this.coinList = [...c]
    }

    setHunger(value){
        this.hungerTimer = value;
    }

    setCoinDrop(value){
        this.coinDropTimer = value;
    }

    
    getClosestCoin(){
        let dist1  = -1
        let dist2 = -1

        for (let c of this.coinList) {
            if (this.coin == null) {
                if(c.y > this.y-20){
                this.coin = c
                }
                else{
                    continue
                }
                
            }
            else {
                dist1 = Math.sqrt(Math.pow(this.coin.x - this.x, 2))
                dist2 = Math.sqrt(Math.pow(c.x - this.x, 2))
                if (dist1 > dist2 && (c.y > this.y-50)) {
                    this.coin = c
                }

            }
        }


    }

    resetDirection() {
        if (this.isRandom && !this.isJustCreated && !this.isRandomCurrently) {
            this.isRandomCurrently = true
        }
    }


    setHascoinsToChase(totalcoinList) {
        if (totalcoinList.length > 0) {
            this.isRandom = false;
            this.hascoinsToChase = true
            this.isJustCreated = false;
            this.isRandomCurrently = false;
            return true;
        }
        else {
            this.isRandom = true;
            this.hascoinsToChase = false;
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

export {Snail}
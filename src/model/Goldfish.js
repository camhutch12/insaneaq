import * as PIXI from 'pixi.js'

class GoldFish {
    static count = 0;
    sprite;
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

    hungerTimer = 0;
    coinDropTimer = 0;

    constructor(x, y) {
        this.sprite = PIXI.Sprite.from('.../assets/fish/fish.svg')
        this.count++;
        this.x = x;
        this.y = y;
        this.sprite.position.x = this.x;
        this.sprite.position.y = this.y;
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

    getClosestCrumb() {
        let dist1 = -1
        let dist2 = -1

        for (let c of this.crumbList) {
            if (this.crumb == null) {
                this.crumb = c
            }
            else {
                dist1 = Math.sqrt(Math.pow(this.crumb.x - this.x, 2) + Math.pow(this.crumb.y - this.y, 2))
                dist2 = Math.sqrt(Math.pow(c.x - this.x, 2) + Math.pow(c.y - this.y, 2))
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
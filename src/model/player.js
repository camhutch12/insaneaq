export class Player{
  coins;
  food;
  currentLevel
  constructor(){
    this.coins = 10000000;
    // this.coins = 0;
    this.food =2
  }

  addCoins(currentCoin){
    
     if(currentCoin.type === 0){
      this.coins += 50
    }
    
    else if(currentCoin.type === 1){

      this.coins += 100
    }
    else if(currentCoin.type === 2){
      this.coins += 300
    }

  }

  addFood(){
    this.food += 1
  }

  removeCoins(amount){
    this.coins -= amount;
    this.coins = this.coins < 0 ? 0:this.coins;
  }

  removeFood(){
    this.food -= 1
  }
}
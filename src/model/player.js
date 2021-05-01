export class Player{
  coins;
  food;
  currentLevel
  damage = 1;
  constructor(){
    this.coins = 0;
    // this.coins = 0;
    this.food =2
    this.damage = 1;
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
    else if(currentCoin === 250){
      this.coins += 350
    }

  }

  upgradeDamage(){
    this.damage *= 2;
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
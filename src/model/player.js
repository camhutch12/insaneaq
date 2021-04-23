export class Player{
  coins;
  food;

  constructor(){
    this.coins = 0;
    this.food =2
  }

  addCoins(currentCoin){
    if(currentCoin.type === 1){

      this.coins += 100
    }
    else{
      this.coins += 50
    }

  }

  addFood(){
    this.food += 1
  }

  removeCoins(amount){
    this.coins -= amount;

  }

  removeFood(){
    this.food -= 1
  }
}
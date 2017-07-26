class PlayerStats {
  constructor(character) {
    this.player = character;
    this.health = 100;
  }
  init(){
      
  } 
  takeDamage(damage){
      this.setHealth(this.getHealth() - damage);
      console.log(this.health);
      this.checkHealth();
  }
  setHealth(health){
      this.health = health;
  }
  getHealth(){
      return this.health;
  }
  checkHealth(){
      if(this.getHealth() === 0){
          console.log("Player 1 Wins");
      }
  }
}
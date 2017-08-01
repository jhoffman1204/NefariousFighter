class PlayerStats {
  constructor(character) {
    this.character = character;
    this.health = 80;  
  }
  init(){
      
  } 
  takeDamage(damage){
      this.setHealth(this.getHealth() - damage);
      this.checkHealth();
      
  }
  setHealth(health){
      this.health = health;
      console.log(health);
  }
  getHealth(){
      return this.health;
  }
  checkHealth(){
      if(this.getHealth() <= 0){
          CharacterSelect.displayWinBanner(3 - this.character.getPlayerNumber());
      }
  }
}
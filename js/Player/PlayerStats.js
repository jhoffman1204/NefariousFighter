class PlayerStats {
  constructor(player) {
    this.player = player;
    this.health = 100;
  }
  init(){
      console.log("health initiated");
  } 
  printHealth(){
      return this.health;
  }
}
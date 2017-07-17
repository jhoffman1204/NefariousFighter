class Character {
  constructor(height, width) {
    this.health = 100;
    this.init();  
  }
  init(){
      console.log("Player Initiated");
      var charJump = new Jump();
  }
  jump(player){
      if(this.jumpEnable === true){
        player.body.velocity.y = -450;
      }
      this.jumpEnable = false;
  }
  enableJump(){
      this.jumpEnable = true;
  }
}
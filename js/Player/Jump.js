class Jump {
  constructor(game,player) {
    this.jumpEnable = true;
    this.init(game,player);
  }
  init(game,player){
      cursors = game.input.keyboard.createCursorKeys();
      this.player = player;
  }
  checkJump(){
      
    if (cursors.up.isDown && this.jumpEnable === true){
        this.player.body.velocity.y = -450;
    }
    //this.jumpEnable = false;
  }
  enableJump(){
      this.jumpEnable = true;
  }
    
}
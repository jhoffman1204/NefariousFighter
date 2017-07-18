class Jump {
  constructor(game,player,playerNumber) {
    this.playerNumber = playerNumber;
    this.jumpEnable = true;
    this.init(game,player);
  }
  init(game,player){
      cursors = game.input.keyboard.createCursorKeys();
      this.player = player;
      if(this.playerNumber === 1){
        this.jump   = game.input.keyboard.addKey(Phaser.Keyboard.W);
      }
      else if(this.playerNumber === 2){
        this.jump   = game.input.keyboard.addKey(Phaser.Keyboard.I);
      }
  }
  checkJump(){
      
    if (this.jump.isDown && this.jumpEnable === true){
        this.player.body.velocity.y = -450;
    }
    //this.jumpEnable = false;
  }
  enableJump(){
      this.jumpEnable = true;
  }
    
}
class Jump {
  constructor(game,player,playerNumber) {
    this.playerNumber = playerNumber;
    this.jumpEnable = true;
    this.init(game,player);
    this.player = player;
  }
  init(game,player){
      cursors = game.input.keyboard.createCursorKeys();
      if(this.playerNumber === 1){
        this.jump   = game.input.keyboard.addKey(Phaser.Keyboard.W);
      }
      else if(this.playerNumber === 2){
        this.jump   = game.input.keyboard.addKey(Phaser.Keyboard.I);
      }
      
      this.jumpTimer = game.time.create(false);
      this.jumpAvailable = true;
  }
  checkJump(){
      
    if (this.jump.isDown && this.jumpEnable === true){
        this.player.body.velocity.y = -750;
        this.jumpEnable = false;
    }
    if(this.player.body.velocity.y === 0){
        this.enableJump();
    }
  }
  enableJump(){
      if(this.jumpEnable === false){
        this.jumpEnable = true;
      }
  }
    
}
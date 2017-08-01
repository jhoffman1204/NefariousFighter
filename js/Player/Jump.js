class Jump {
  constructor(game,player,playerNumber) {
    this.playerNumber = playerNumber;
    this.jumpEnable = true;
    this.secondJumpEnable = false;
    this.anyJumpEnable = true;
    this.init(game,player);
    this.player = player;
  }
  init(game,player){
      cursors = game.input.keyboard.createCursorKeys();
      if(this.playerNumber === 1){
        this.jump   = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.fall   = game.input.keyboard.addKey(Phaser.Keyboard.S);
      }
      else if(this.playerNumber === 2){
        this.jump   = game.input.keyboard.addKey(Phaser.Keyboard.I);
        this.fall   = game.input.keyboard.addKey(Phaser.Keyboard.K);  
      }
      
      this.jumpTimer = game.time.create(false);
      this.jumpAvailable = true;
  }
  checkJump(){
      
    if (this.jump.isDown && this.jumpEnable === true){
        this.player.body.velocity.y = -750;
        this.jumpEnable = false;
    }
    else if(this.jump.isDown && this.secondJumpEnable === true){
        this.player.body.velocity.y = -750;
        this.secondJumpEnable = false;
        this.anyJumpEnable = false;
    }
    if(this.jump.isUp && (this.player.body.velocity.y > 200 || this.player.body.velocity.y < -200) && this.anyJumpEnable === true){
        this.secondJumpEnable = true;
        console.log(this.player.body.velocity.y);
    }  
    
    if(this.player.body.velocity.y === 0){
        this.enableJump();
    }
    if(this.player.body.velocity.y != 0 && this.fall.isDown){
        this.player.body.velocity.y = 750;
    }
    
  }
  enableJump(){
      if(this.jumpEnable === false){
        this.jumpEnable = true;
        this.secondJumpEnable = false;
        this.anyJumpEnable = true;
      }
  }
    
}
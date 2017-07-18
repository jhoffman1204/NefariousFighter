class PlayerMovement {
  constructor(player,playerNumber) {
    this.jumpEnable = true;
    this.player = player;
    this.playerNumber = playerNumber;
    this.init();
  }
  init(){
      this.player.animations.add('left', [12, 13, 14], 10, true);
      this.player.animations.add('right', [24, 25, 26], 10, true);
      
      this.test   = game.input.keyboard.addKey(Phaser.Keyboard.T);
      
      if(this.playerNumber === 1){
        this.attack_left   = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.attack_right  = game.input.keyboard.addKey(Phaser.Keyboard.D);
          console.log("reached 1");
      }
      else if(this.playerNumber === 2){
        this.attack_left   = game.input.keyboard.addKey(Phaser.Keyboard.J);
        this.attack_right  = game.input.keyboard.addKey(Phaser.Keyboard.L);
          console.log("reached 2");
      }
  }
  checkInput(){
      
    if(this.attack_left.isDown){
        this.player.body.velocity.x = -150;
        this.player.animations.play('left');
    }  
    else if(this.attack_right.isDown){
        this.player.body.velocity.x = 150;
        this.player.animations.play('right');
    } 
    else{
        this.player.body.velocity.x = 0;
        this.player.animations.frame = 1;
    }   

  }
}
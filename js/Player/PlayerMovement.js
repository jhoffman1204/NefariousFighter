class PlayerMovement {
  constructor(player,playerNumber) {
    this.jumpEnable = true;
    this.player = player;
    this.playerNumber = playerNumber;
    this.init();
  }
  init(){
      this.assignPlayerMovementAnimations();
  }
  assignPlayerMovementAnimations(){
      
      if(this.playerNumber === 1){
      if(PlayerDelegateManager.getPlayer1Character() === "Neko"){
          this.player.animations.add('left', [12, 13, 14], 10, true);
          this.player.animations.add('right', [24, 25, 26], 10, true);
          this.player.animations.add('idle', [0, 1, 2], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer1Character() === "Tanuki"){
        this.player.animations.add('left', [15, 16, 17], 10, true);
        this.player.animations.add('right', [27, 28, 29], 10, true);
        this.player.animations.add('idle', [3, 4, 5], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer1Character() === "Sakana"){
         this.player.animations.add('left', [18, 19, 20], 10, true);
         this.player.animations.add('right', [30, 31, 32], 10, true);
         this.player.animations.add('idle', [6, 7, 8], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer1Character() === "Kaeru"){
         this.player.animations.add('left', [60, 61, 62], 10, true);
         this.player.animations.add('right', [72, 73, 74], 10, true);
         this.player.animations.add('idle', [48, 49, 50], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer1Character() === "Minato"){
         this.player.animations.add('left', [63, 64, 65], 10, true);
         this.player.animations.add('right', [75, 76, 77], 10, true);
         this.player.animations.add('idle', [51, 52, 53], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer1Character() === "Nezumi"){
         this.player.animations.add('left', [66, 67, 68], 10, true);
         this.player.animations.add('right', [78, 79, 80], 10, true);
         this.player.animations.add('idle', [54, 55, 56], 4, true);
      }
      
      if(this.playerNumber === 1){
        this.attack_left   = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.attack_right  = game.input.keyboard.addKey(Phaser.Keyboard.D);
      }
      else if(this.playerNumber === 2){
        this.attack_left   = game.input.keyboard.addKey(Phaser.Keyboard.J);
        this.attack_right  = game.input.keyboard.addKey(Phaser.Keyboard.L);
      }
    }
    else if (this.playerNumber === 2){
        if(PlayerDelegateManager.getPlayer2Character() === "Neko"){
          this.player.animations.add('left', [12, 13, 14], 10, true);
          this.player.animations.add('right', [24, 25, 26], 10, true);
          this.player.animations.add('idle', [0, 1, 2], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer2Character() === "Tanuki"){
        this.player.animations.add('left', [15, 16, 17], 10, true);
        this.player.animations.add('right', [27, 28, 29], 10, true);
        this.player.animations.add('idle', [3, 4, 5], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer2Character() === "Sakana"){
         this.player.animations.add('left', [18, 19, 20], 10, true);
         this.player.animations.add('right', [30, 31, 32], 10, true);
         this.player.animations.add('idle', [6, 7, 8], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer2Character() === "Kaeru"){
         this.player.animations.add('left', [60, 61, 62], 10, true);
         this.player.animations.add('right', [72, 73, 74], 10, true);
         this.player.animations.add('idle', [48, 49, 50], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer2Character() === "Minato"){
         this.player.animations.add('left', [63, 64, 65], 10, true);
         this.player.animations.add('right', [75, 76, 77], 10, true);
         this.player.animations.add('idle', [51, 52, 53], 4, true);
      }
      else if(PlayerDelegateManager.getPlayer2Character() === "Nezumi"){
         this.player.animations.add('left', [66, 67, 68], 10, true);
         this.player.animations.add('right', [78, 79, 80], 10, true);
         this.player.animations.add('idle', [54, 55, 56], 4, true);
      }
      
      if(this.playerNumber === 1){
        this.attack_left   = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.attack_right  = game.input.keyboard.addKey(Phaser.Keyboard.D);
      }
      else if(this.playerNumber === 2){
        this.attack_left   = game.input.keyboard.addKey(Phaser.Keyboard.J);
        this.attack_right  = game.input.keyboard.addKey(Phaser.Keyboard.L);
      }
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
        this.player.animations.play('idle');
    }   

  }
}
class Attack {
  constructor(player,character) {
    this.character = character;
    this.jumpEnable = true;
    this.init();
    this.player = player;
    this.attackAnimationAvailable = true;
      
  }
  init(){
      this.attackButton1   = game.input.keyboard.addKey(Phaser.Keyboard.Q);
      this.attackButton2   = game.input.keyboard.addKey(Phaser.Keyboard.E);
      this.attackButton3   = game.input.keyboard.addKey(Phaser.Keyboard.U);
      this.attackButton4   = game.input.keyboard.addKey(Phaser.Keyboard.O);
      this.attackTimer = game.time.create(false);
      this.attackAvailable = true;
      this.fireBallCounter = 0;
      
      this.leftFirebolts = [];
      this.rightFirebolts = [];
      for(var i = 0; i < 100; i++){
          this.leftFirebolts[i] = game.add.sprite(-200, -200, 'waterboltLeft');
          this.rightFirebolts[i] = game.add.sprite(-200, -200, 'waterboltRight');
      }
  }
  checkInput(){
      if(this.attackButton1.isDown && this.character.getPlayerNumber() === 1){
          if(this.attackAvailable === true){
            this.firebolt = this.leftFirebolts[this.fireBallCounter++];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y + 40;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = -850;
            this.attackTimer.repeat(500, 0,this.startAttackTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
      else if(this.attackButton2.isDown && this.character.getPlayerNumber() === 1){
          if(this.attackAvailable === true){
            this.firebolt = this.rightFirebolts[this.fireBallCounter++];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y + 40;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = 750;
            this.attackTimer.repeat(500, 0,this.startAttackTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
      else if(this.attackButton3.isDown && this.character.getPlayerNumber() === 2){
          if(this.attackAvailable === true){
            this.firebolt = this.leftFirebolts[this.fireBallCounter++];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y + 40;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = -850;
            this.attackTimer.repeat(500, 0,this.startAttackTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
      else if(this.attackButton4.isDown && this.character.getPlayerNumber() === 2){
          if(this.attackAvailable === true){
            this.firebolt = this.rightFirebolts[this.fireBallCounter++];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y + 40;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = 650;
            this.attackTimer.repeat(500, 0,this.startAttackTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
   
      if(this.character.getPlayerNumber() === 1){
        for(var i = 0; i < this.leftFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.leftFirebolts[i]);
          }
          for(var i = 0; i < this.rightFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.rightFirebolts[i]);
          }
      }
      else if(this.character.getPlayerNumber() === 2){
          for(var i = 0; i < this.leftFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.leftFirebolts[i]);
          }
          for(var i = 0; i < this.rightFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.rightFirebolts[i]);
          }
      }
      
  }
  startAttackTimer(){
      this.attackAvailable = true;
  }
}
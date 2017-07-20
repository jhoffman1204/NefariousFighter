class Attack {
  constructor(player,playerNumber,character) {
    this.playerNumber = playerNumber;
    this.character = character;
    this.jumpEnable = true;
    this.init();
    this.player = player;
  }
  init(){
      this.attackButton1   = game.input.keyboard.addKey(Phaser.Keyboard.Q);
      this.attackButton2   = game.input.keyboard.addKey(Phaser.Keyboard.E);
      this.attackButton3   = game.input.keyboard.addKey(Phaser.Keyboard.U);
      this.attackButton4   = game.input.keyboard.addKey(Phaser.Keyboard.O);
      this.attackTimer = game.time.create(false);
      this.attackAvailable = true;
      
      this.leftFirebolts = [];
      this.rightFirebolts = [];
      for(var i = 0; i < 10; i++){
          this.leftFirebolts[i] = game.add.sprite(-200, -200, 'waterboltLeft');
          this.rightFirebolts[i] = game.add.sprite(-200, -200, 'waterboltRight');
      }
  }
  checkInput(){
      if(this.attackButton1.isDown && this.playerNumber === 1){
          this.player.body.velocity.x = 0;
          this.player.body.velocity.y = 0;
          if(this.attackAvailable === true){
            this.firebolt = this.leftFirebolts[0];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = -550;
            this.attackTimer.repeat(500, 0,this.startTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
      else if(this.attackButton2.isDown && this.playerNumber === 1){
          this.player.body.velocity.x = 0;
          this.player.body.velocity.y = 0;
          if(this.attackAvailable === true){
            this.firebolt = this.rightFirebolts[0];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = 750;
            this.attackTimer.repeat(500, 0,this.startTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
      else if(this.attackButton3.isDown && this.playerNumber === 2){
          this.player.body.velocity.x = 0;
          this.player.body.velocity.y = 0;
          if(this.attackAvailable === true){
            this.firebolt = this.leftFirebolts[0];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = -850;
            this.attackTimer.repeat(500, 0,this.startTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
      else if(this.attackButton4.isDown && this.playerNumber === 2){
          this.player.body.velocity.x = 0;
          this.player.body.velocity.y = 0;
          if(this.attackAvailable === true){
            this.firebolt = this.rightFirebolts[0];
            this.firebolt.x = this.player.x;
            this.firebolt.y = this.player.y;
            
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = 650;
            this.attackTimer.repeat(500, 0,this.startTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
   
      if(this.playerNumber === 1){
        for(var i = 0; i < this.leftFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.leftFirebolts[0]);
          }
          for(var i = 0; i < this.rightFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.rightFirebolts[0]);
          }
      }
      else if(this.playerNumber === 2){
          for(var i = 0; i < this.leftFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.leftFirebolts[0]);
          }
          for(var i = 0; i < this.rightFirebolts.length; i++){
            this.character.getPlayerCollision(). checkCollisionFireBall(this.rightFirebolts[0]);
          }
      }
      
  }
  startTimer(){
      this.attackAvailable = true;
  }
}
class Attack {
  constructor(player,playerNumber) {
    this.playerNumber = playerNumber;
    this.jumpEnable = true;
    this.init();
    this.player = player;
  }
  init(){
      this.attackButton1   = game.input.keyboard.addKey(Phaser.Keyboard.W);
      this.attackButton2   = game.input.keyboard.addKey(Phaser.Keyboard.D);
      this.attackTimer = game.time.create(false);
      this.attackAvailable = true;
  }
  generateFireball(){
          this.firebolt = game.add.sprite(this.player.x, this.player.y, 'waterbolt');
           game.physics.arcade.enable(this.firebolt);
           this.firebolt.body.velocity.x = 350;
  }
  checkInput(){
      if(this.attackButton1.isDown && this.attackButton2.isDown && this.playerNumber === 1){
          this.player.body.velocity.x = 0;
          this.player.body.velocity.y = 0;
          if(this.attackAvailable === true){
            this.firebolt = game.add.sprite(this.player.x, this.player.y, 'waterbolt');
            game.physics.arcade.enable(this.firebolt);
            this.firebolt.body.velocity.x = 350;
            this.attackTimer.repeat(500, 0,this.startTimer, this);
            this.attackTimer.start();
            this.attackAvailable = false;
          }
      }
  }
  startTimer(){
      console.log("test");
      this.attackAvailable = true;
  }
}
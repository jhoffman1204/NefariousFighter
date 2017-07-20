class Character {
  constructor(game,playerNumber) {
    this.health = 100;
    this.playerNumber = playerNumber;
      
      if(playerNumber === 1){
       this.player = game.add.sprite(100, game.world.height - 550, 'mage');   
      }
      else if(playerNumber === 2){
          this.player = game.add.sprite(600, game.world.height - 550, 'mage');
      }
    this.init(game);
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000;
  }
  init(game){
      this.playerStats = new PlayerStats(this.player);
      this.playerJump = new Jump(game,this.player,this.playerNumber);
      this.playerCollision = new Collision(this.player,this);
      this.playerMovement = new PlayerMovement(this.player,this.playerNumber);
      this.playerAttack = new Attack(this.player,this.playerNumber,this);
  }
  initCollision(){
      this.playerCollision.init();
  }
  update(){
      this.playerCollision.checkCollision(game,this.player, blockedLayer);
      this.playerJump.checkJump();
      this.playerMovement.checkInput();
      this.playerAttack.checkInput();
  }
  getPlayerStats(){
      return this.playerStats;
  }
  getPlayerCollision(){
      return this.playerCollision;
  }
  getPlayer(){
      return this.player;
  }
  getPlayerNumber(){
      return this.playerNumber;
  }
}
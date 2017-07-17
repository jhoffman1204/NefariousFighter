class Character {
  constructor(game) {
    this.health = 100;
      
    this.player = game.add.sprite(32, game.world.height - 250, 'dude');
    this.init(game);
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 1000;
  }
  init(game){
      console.log(this.player);
      this.playerJump = new Jump(game,this.player);
      this.playerCollision = new Collision();
      this.playerMovement = new PlayerMovement(this.player);
  }
  update(){
      this.playerCollision.checkCollision(game,this.player, blockedLayer);
      this.playerJump.checkJump();
      this.playerMovement.checkInput();
  }
}
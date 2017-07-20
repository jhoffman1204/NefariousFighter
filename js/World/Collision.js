class Collision {
  constructor(player,character) {
    this.player = player;
    this.character = character;
    this.enemyPlayer;
  }
  init(){
      if(this.character.getPlayerNumber() === 1){
        this.enemyPlayer = PlayerInteractionManager.getPlayer2().getPlayer();
      }
      if(this.character.getPlayerNumber() === 2){
        this.enemyPlayer = PlayerInteractionManager.getPlayer1().getPlayer();
      }
  }
  checkCollision(game,playerCollide,blockedLayer){
      game.physics.arcade.collide(playerCollide, blockedLayer);
  }
  touchGround(player){
       
  }
  collide(x,y){
        this.currentExplosion = game.add.sprite(x,y,'explosion');
        this.currentExplosion.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10], 10, true);
        this.currentExplosion.animations.play('explode',10, false,false);
  }
  checkCollisionFireBall(fireball){
      game.physics.arcade.overlap(this.enemyPlayer, fireball, this.test, null, this);
  }
  test(){
      this.collide(this.enemyPlayer.x,this.enemyPlayer.y);
  }
}
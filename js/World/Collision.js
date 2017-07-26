class Collision {
  constructor(player,character) {
    this.player = player;
    this.character = character;
    this.enemyPlayer;
    this.damageAnimationAvailable = true;
  }
  init(){
      if(this.character.getPlayerNumber() === 1){
        this.enemyPlayer = PlayerInteractionManager.getPlayer2().getPlayer();
      }
      if(this.character.getPlayerNumber() === 2){
        this.enemyPlayer = PlayerInteractionManager.getPlayer1().getPlayer();
      }
      
      this.damageAnimationTimer = game.time.create(false);
      this.attackAvailable = true;
      
  }
  checkCollision(game,playerCollide,blockedLayer){
      game.physics.arcade.collide(playerCollide, blockedLayer);
  }
  touchGround(player){
       
  }
  iceBallCollide(x,y){
      if(PlayerInteractionManager.getAnimationAvailable() === true){
        this.currentExplosion = game.add.sprite(x,y,'explosion');
        this.currentExplosion.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10], 10, true);
        this.currentExplosion.animations.play('explode',10, false,false);
        this.damageAnimationAvailable = false;
        PlayerInteractionManager.disablePlayerAnimation();
      }
      
      this.character.getPlayerStats().takeDamage(20);
      
  }
  checkCollisionFireBall(fireball){
      this.fireball = fireball;
      game.physics.arcade.overlap(this.enemyPlayer, fireball, this.test, null, this);
  }
  test(fireball){
      this.iceBallCollide (this.enemyPlayer.x,this.enemyPlayer.y);
      this.fireball.destroy();
  }
}
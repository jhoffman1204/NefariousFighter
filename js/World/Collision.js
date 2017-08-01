class Collision {
  constructor(player,character) {
    this.player = player;
    this.character = character;
    this.enemyPlayer;
  }
  init(){
      if(this.character.getPlayerNumber() === 1){
        this.enemyPlayer = PlayerInteractionManager.getCharacter2();
      }
      if(this.character.getPlayerNumber() === 2){
        this.enemyPlayer = PlayerInteractionManager.getCharacter1();
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
        PlayerInteractionManager.disablePlayerAnimation();
      }
      
      this.enemyPlayer.getPlayerStats().takeDamage(7);
      var newHealth = this.enemyPlayer.getPlayerStats().getHealth();
      if(this.character.getPlayerNumber() === 1){
    this.character.getCharacterGUI().determineHealth(newHealth,2);
      }
      else if(this.character.getPlayerNumber() === 2){
     this.character.getCharacterGUI().determineHealth(newHealth,1);
      }
      
  }
  checkCollisionFireBall(fireball){
      this.fireball = fireball;
      game.physics.arcade.overlap(this.enemyPlayer.getPlayer(), fireball, this.test, null, this);
  }
  test(fireball){
      this.iceBallCollide (this.enemyPlayer.getPlayer().x,this.enemyPlayer.getPlayer().y);
      this.fireball.destroy();
  }
}
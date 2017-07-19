class PlayerCollision {
  constructor(player, game) {
    this.player = player;
  }
  init(){
      
  }
  fireExplosion(x,y){
        this.currentExplosion = this.game.add.sprite(x,y,'explosion');
        this.currentExplosion.animations.add('explode', [0,1,2,3,4,5,6,7,8,9,10], 10, true);
        this.currentExplosion.animations.play('explode',10, false,false);
  }
  checkCollision(){
      if(true){
          //this.fireExplosion(this.player.x,this.player.y)
      }
  }
}
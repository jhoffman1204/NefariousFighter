class Collision {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    
  }
  init(){
      console.log("collision init");
  }
  checkCollision(game,playerCollide,blockedLayer){
      game.physics.arcade.collide(playerCollide, blockedLayer);
  }
  touchGround(player){
       
  }
}
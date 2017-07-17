class PlayerCollision {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.jumpEnable = true;
  }
  init(){
      console.log("gravity init");
  }
  jump(player){
      if(this.jumpEnable === true){
        player.body.velocity.y = -450;
      }
      this.jumpEnable = false;
  }
  enableJump(){
      this.jumpEnable = true;
  }
}
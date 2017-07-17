class Jump {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.jumpEnable = true;
    this.init();
  }
  init(){
      console.log("Jumping Initialized");
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
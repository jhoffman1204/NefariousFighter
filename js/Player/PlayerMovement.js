class PlayerMovement {
  constructor(player) {
    this.jumpEnable = true;
    this.player = player;
  }
  init(){
      console.log("gravity init");
  }
  checkInput(){
    if (cursors.left.isDown){
        this.player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown){
        this.player.body.velocity.x = 150;
    }
    else{
        this.player.body.velocity.x = 0;
    }
  }
}
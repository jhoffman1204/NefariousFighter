class Gravity {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    
  }
  init(){
      
  } 
  enableGravity(player){
     player.body.gravity.y = 3000;
  }
}
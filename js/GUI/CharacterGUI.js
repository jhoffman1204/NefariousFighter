class CharacterGUI {
  init(){
      
  }
  placeProfileImage(){
      this.playerProfile = game.add.sprite(100,650,'MinatoProfile'); 
              this.playerProfile.fixedToCamera = true;
      this.playerTwoProfile = game.add.sprite(500,650,'MinatoProfile'); 
              this.playerTwoProfile.fixedToCamera = true;
  }
}
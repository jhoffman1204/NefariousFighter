class CharacterGUI {
  init(character){
      this.firstDigitHealth = null;
      this.secondDigitHealth = null;
      this.initialized = false;
      this.character = character;

  }
  placeProfileImage(playerNumber, profileImage){
      if(playerNumber === 1){
            this.playerProfile = game.add.sprite(100,650,profileImage); 
            this.playerProfile.fixedToCamera = true;
      }
      else if(playerNumber === 2){
            this.playerTwoProfile = game.add.sprite(500,650,profileImage); 
            this.playerTwoProfile.fixedToCamera = true;
      }
      
      this.initializeHealth(80,playerNumber);
  }
  determineHealth(health, playernumber){
      
      var healthTemp = health;
      var firstDigit = Math.floor(health / 10);
      var secondDigit = health % 10;
      
      //console.log(firstDigit);
      //uconsole.log(secondDigit);
      
      if(playernumber === 1){
          var p11x = 210;
          var p12x = 292;
      }
      else if(playernumber === 2){
          var p11x = 610;
          var p12x = 692;
      }
      
      if(this.character.getPlayerNumber() === 1){           
          PlayerInteractionManager.getCharacter2().getCharacterGUI().getFirstDigitHealth().frame = firstDigit;
          PlayerInteractionManager.getCharacter2().getCharacterGUI().getSecondDigitHealth().frame = secondDigit;                                                
    }
      else if(this.character.getPlayerNumber() === 2){
          PlayerInteractionManager.getCharacter1().getCharacterGUI().getFirstDigitHealth().frame = firstDigit;
          PlayerInteractionManager.getCharacter1().getCharacterGUI().getSecondDigitHealth().frame = secondDigit;
      }

  }
    getFirstDigitHealth(){
        return this.firstDigitHealth;
    }
    setFirstDigitHealth(digit){
        this.firstDigitHealth = digit;
    }
    getSecondDigitHealth(){
        return this.secondDigitHealth;
    }
    setSecondDigitHealth(digit){
        this.secondDigitHealth = digit;
    }
    
    
    initializeHealth(health,playernumber){
         
      this.initialized = true;
      
      var healthTemp = health;
      var firstDigit = Math.floor(health / 10);
      var secondDigit = health % 10;
      
      //console.log(firstDigit);
      //uconsole.log(secondDigit);
      
      if(playernumber === 1){
          var p11x = 210;
          var p12x = 292;
      }
      else if(playernumber === 2){
          var p11x = 610;
          var p12x = 692;
      }
        
    this.setFirstDigitHealth(game.add.sprite(p11x,650,'numberSpriteSheet'));
    this.setSecondDigitHealth(game.add.sprite(p12x,650,'numberSpriteSheet'));
      
        this.getFirstDigitHealth().frame = firstDigit;
        this.getSecondDigitHealth().frame = secondDigit;
    }
    
}
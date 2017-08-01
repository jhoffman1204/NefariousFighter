var Controller = {
    player1: null,
    player2: null,
    gameStarted: false,
    character1: null,
    character2: null,
    playerAnimationAvailable: true,
    init: function(){
        this.damageAnimationTimer = game.time.create(false);
        this.damageAnimationTimer.repeat(500, 1000,this.playerAnimationAvailable, this);
        this.damageAnimationTimer.start();
    },
    setPlayer1: function(character){
        
    },
    createWelcomePage: function(){
        mainMenu = new MainMenu();
        mainMenu.createMenu();
        mainMenu.addPlayButton();
    },
    displayCharacterSelectPage: function(){
        CharacterSelect.init();  
    },
    startTwoPlayerGame: function(){
        mapLoader.loadMap('venusMap');
        this.gameStarted = true;
        blockedLayer = mapLoader.getBlockedLayer();
        game.physics.startSystem(Phaser.Physics.ARCADE);
    
        character1 = new Character(game, 1);
        character2 = new Character(game, 2);
    
        PlayerInteractionManager.setCharacter1(character1);
        PlayerInteractionManager.setCharacter2(character2);
        PlayerInteractionManager.init(); 
    
        character1.initCollision();
        character2.initCollision();
    },
    update: function(){
        if(this.gameStarted === true){
            character1.update();
            character2.update();
        }
    },
    setPlayer1: function(player1){
        this.player1 = player1;
    },
    setPlayer2: function(player2){
        this.player2 = player2;
    }
}
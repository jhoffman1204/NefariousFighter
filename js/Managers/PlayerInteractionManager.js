var PlayerInteractionManager = {
    player1: null,
    player2: null,
    character1: null,
    character2: null,
    playerAnimationAvailable: true,
    init: function(){
        this.damageAnimationTimer = game.time.create(false);
        this.damageAnimationTimer.repeat(500, 1000,this.playerAnimationAvailable, this);
        this.damageAnimationTimer.start();
        console.log("new");
    },
    setPlayer1: function(character){
        this.player1 = character;
    },
    setPlayer2: function(character){
        this.player2 = character;
    },
    getPlayer1: function(){
        return this.player1;
    },
    getPlayer2: function(){
        return this.player2;
    },
    test: function(){
        console.log("test");
    },
    playerAnimationAvailable: function(){
        this.playerAnimationAvailable = true;
    },
    disablePlayerAnimation: function(){
        this.playerAnimationAvailable = false;
    },
    getAnimationAvailable: function(){
        return this.playerAnimationAvailable;
    },
    setCharacter1: function(character1){
        this.character1 = character1;
        this.player1 = character1.getPlayer();
    },
    setCharacter2: function(character2){
        this.character2 = character2;
        this.player2 = character1.getPlayer();
    },
    getCharacter1: function(){
        return this.character1;
    },
    getCharacter2: function(){
        return this.character2;    
    }
}
var PlayerInteractionManager = {
    player1: null,
    player2: null,
    playerAnimationAvailable: true,
    init: function(){
        this.damageAnimationTimer = game.time.create(false);
        this.damageAnimationTimer.repeat(500, 1000,this.playerAnimationAvailable, this);
        this.damageAnimationTimer.start();
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
    }
}
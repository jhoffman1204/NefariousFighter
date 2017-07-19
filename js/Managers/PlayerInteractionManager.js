var PlayerInteractionManager = {
    player1: null,
    player2: null,
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
    }
}
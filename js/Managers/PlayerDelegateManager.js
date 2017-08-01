var PlayerDelegateManager = {
    player1Character: null,
    player2Character: null,
    playerAnimationAvailable: true,
    player1ProfileImage: null,
    player2ProfileImage: null,
    init: function(){
        
        
    },
    setPlayer1Character: function(character){
        this.player1Character = character;
    },
    setPlayer2Character: function(character){
        this.player2Character = character;
    },
    getPlayer1Character: function(){
        return this.player1Character;
    },
    getPlayer2Character: function(){
        return this.player2Character;
    },
    setPlayer1ProfileImage: function(imageName){
        this.player1ProfileImage = imageName;
    },
    setPlayer2ProfileImage: function(imageName){
        this.player2ProfileImage = imageName;
    },
    getPlayer1ProfileImage: function(){
        return this.player1ProfileImage;
    },
    getPlayer2ProfileImage: function(){
        return this.player2ProfileImage;
    }
    
    
}
var CharacterSelect = {
    
    init: function(){
        this.welcomeScreen = 
        game.add.sprite(0,0,'CharacterSelect'); 
        this.welcomeScreen.fixedToCamera = true;
        this.createSelectButtons();
    },
    loadPage: function(){
    
    },
    createSelectButtons: function(){
        for(var i = 0; i < 6; i++){
            this.playButton = game.add.button(200 + (i * 150), 500, 'SelectButton', this.selectCharacter(i), this, 2, 1, 0);   
        }
    },
    selectCharacter(char){
        
    }
}
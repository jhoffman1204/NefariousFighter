class MainMenu{
    constructor(){
        this.playbutton;
    }
    init(){
        
    }
    addPlayButton(){
        this.playButton = game.add.button(160, 350, 'PlayButton', this.playButtonClicked, this, 2, 1, 0);
    }
    playButtonClicked(){
        Controller.displayCharacterSelectPage();
        this.playButton.destroy();
    }
    createMenu(){
        this.welcomeScreen = 
        game.add.sprite(0,0,'WelcomeScreen'); 
        this.welcomeScreen.fixedToCamera = true;
    }
    
}
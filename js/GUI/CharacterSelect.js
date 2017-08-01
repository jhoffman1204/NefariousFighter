var CharacterSelect = {
    selectButtons: null,
    selectCounter: 1,
    player1ChooseDialogue: "Player 1 Choose",
    player2ChooseDialogue: "Player 2 Choose",
    text: game.add.text(500, 600, this.player1ChooseDialogue, this.style),
    init: function(){
        this.characterSelectScreen = 
        game.add.sprite(0,0,'CharacterSelect'); 
        
        this.characterSelectScreen.fixedToCamera = true;
        this.createSelectButtons();
        this.selectButtons = [];
        
    },
    loadPage: function(){
    
    },
    createSelectButtons: function(){
        this.MinatoButton = game.add.button(200 + (0 * 150), 500, 'SelectButton', this.chooseMinato, this);
        
        this.KaeruButton = game.add.button(200 + (1 * 150), 500, 'SelectButton', this.chooseKaeru, this);
        
        this.NezumiButton = game.add.button(200 + (2 * 150), 500, 'SelectButton', this.chooseNezumi, this);
        
        this.TanukiButton = game.add.button(200 + (3 * 150), 500, 'SelectButton', this.chooseTanuki, this);
        
        this.SakanaButton = game.add.button(200 + (4 * 150), 500, 'SelectButton', this.chooseSakana, this);
        
        this.NekoButton = game.add.button(200 + (5 * 150), 500, 'SelectButton', this.chooseNeko, this);
        
        this.text = game.add.text(500, 600, this.player1ChooseDialogue, this.style);
        
    },
    chooseMinato: function(){
        if(this.selectCounter === 1){
            PlayerDelegateManager.setPlayer1Character("Minato");
            PlayerDelegateManager.setPlayer1ProfileImage('MinatoProfile');
            
            this.selectCounter++;
            this.text.destroy();
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
        }
        else if(this.selectCounter === 2){
            PlayerDelegateManager.setPlayer2Character("Minato");
            PlayerDelegateManager.setPlayer2ProfileImage('MinatoProfile');
            this.selectMap();
        }
    },
    chooseKaeru: function(){
        if(this.selectCounter === 1){
            PlayerDelegateManager.setPlayer1Character("Kaeru");
            PlayerDelegateManager.setPlayer1ProfileImage('KaeruProfile');
            this.selectCounter++;
            this.text.destroy();
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
        }
        else if(this.selectCounter === 2){
            PlayerDelegateManager.setPlayer2Character("Kaeru");
            PlayerDelegateManager.setPlayer2ProfileImage('KaeruProfile');
            this.selectMap();
        }
    },
    chooseNezumi: function(){
        if(this.selectCounter === 1){
            PlayerDelegateManager.setPlayer1Character("Nezumi");
            PlayerDelegateManager.setPlayer1ProfileImage('NezumiProfile');
            this.selectCounter++;
            this.text.destroy();
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
        }
        else if(this.selectCounter === 2){
            PlayerDelegateManager.setPlayer2Character("Nezumi");
            PlayerDelegateManager.setPlayer2ProfileImage('NezumiProfile');
            this.selectMap();
        }
    },
    chooseTanuki: function(){
        if(this.selectCounter === 1){
            PlayerDelegateManager.setPlayer1Character("Tanuki");
            PlayerDelegateManager.setPlayer1ProfileImage('TanukiProfile');
            this.selectCounter++;
            this.text.destroy();
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
        }
        else if(this.selectCounter === 2){
            PlayerDelegateManager.setPlayer2Character("Tanuki");
            PlayerDelegateManager.setPlayer2ProfileImage('TanukiProfile');
            this.selectMap();
        }
    },
    chooseSakana: function(){
        if(this.selectCounter === 1){
            PlayerDelegateManager.setPlayer1Character("Sakana");
            PlayerDelegateManager.setPlayer1ProfileImage('SakanaProfile');
            this.selectCounter++;
            this.text.destroy();
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
        }
        else if(this.selectCounter === 2){
            PlayerDelegateManager.setPlayer2Character("Sakana");
            PlayerDelegateManager.setPlayer2ProfileImage('SakanaProfile');
            this.selectMap();
        }
    },
    chooseNeko: function(){
        if(this.selectCounter === 1){
            PlayerDelegateManager.setPlayer1Character("Neko");
            PlayerDelegateManager.setPlayer1ProfileImage('NekoProfile');
            this.selectCounter++;
            this.text.destroy();
            this.text = game.add.text(500, 600, this.player2ChooseDialogue, this.style);
        }
        else if(this.selectCounter === 2){
            PlayerDelegateManager.setPlayer2Character("Neko");
            PlayerDelegateManager.setPlayer2ProfileImage('NekoProfile');
            this.selectMap();
        }
    },
    
    
    selectCharacter: function(char){
        this.selectMap();
    },
    clear: function(){
        for(var i = 0; i < 6; i++){
            console.log(this.selectButtons[i]);
        }
    },
    selectMap: function(){
        Controller.startTwoPlayerGame();
    },
    getSelectButtons: function(){
        return this.selectButtons;
    }
}
var mapLoader = {
    testVariable: null,
    init: function(){
        
    },
    loadMap: function(mapName){
        this.map = game.add.tilemap(mapName);
        this.map.addTilesetImage('smallTiles', 'smallTiles');
        this.backgroundlayer = this.map.createLayer('background');
        this.backgroundlayer2 = this.map.createLayer('background2');
        this.blockedLayer = this.map.createLayer('blocked');
        this.map.setCollisionBetween(1, 2000, true, 'blocked');
    },
    getBlockedLayer(){
        return this.blockedLayer;
    }
}
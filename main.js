window.onload = function() {
    // config object to store the game canvas settings
    let config = {
        width: 800,
        height: 800,
        backgroundColor: 0X000000,
        scene: [Scene1, Scene2],
        pixelArt: true,
        physics: {
            default: "arcade",
            arcade: {
                debug: false
            }
        }
    }

    let gameSettings = {
        playerSpeed: 100
    }
    // making the config variable accessible globally so that Scene1 and Scene2 can access it
    window.config = config;
   
    let game = new Phaser.Game(config);
    window.game = game;
    window.gameSettings = gameSettings;
}
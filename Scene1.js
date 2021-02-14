class Scene1 extends Phaser.Scene {
    constructor() { // constructors
        super("bootGame");
    }

    // CLASS METHODS

    // preloading in the assets into memory
    preload() {
        // background
        this.load.image("background", "assets/images/background.png");

        // ship spritesheets
        this.load.spritesheet("ship", "assets/spritesheets/ship.png", {
                frameWidth: 16,
                frameHeight: 16
            }
        );

        this.load.spritesheet("ship2", "assets/spritesheets/ship2.png", {
                frameWidth: 32,
                frameHeight: 16
            }
        );

        this.load.spritesheet("ship3", "assets/spritesheets/ship3.png", {
                frameWidth: 32,
                frameHeight: 32
            }
        );

        // explosion, power-up, beam and player spritesheets
        this.load.spritesheet("explosion", "assets/spritesheets/explosion.png", {
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.spritesheet("power-up", "assets/spritesheets/power-up.png", {
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.spritesheet("player", "assets/spritesheets/player.png", {
            frameWidth: 16,
            frameHeight: 24
        })

        this.load.spritesheet("beam", "assets/spritesheets/beam.png", {
            frameWidth: 16,
            frameHeight: 16
        })

        this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml")
        // sound loading
        this.load.audio("audio_beam", ["assets/sounds/beam.ogg", "assets/sounds/beam.mp3"])
        this.load.audio("audio_explosion", ["assets/sounds/explosion.ogg", "assets/sounds/explosion.mp3"])
        this.load.audio("audio_pickup", ["assets/sounds/pickup.ogg", "assets/sounds/pickup.mp3"])
        this.load.audio("music", ["assets/sounds/sci-fi_platformer12.ogg", "assets/sounds/sci-fi_platformer12.mp3"])
    }

    // initial creation of the loading screen and starting up the play screen
    create() {
        this.add.text(20, 20, "Loading game...") // throws loading message on screen
        // this.scoreLabel = this.add.bitmapText(10, 5, "pixelFont", "SCORE ", 16)
        this.scene.start("playGame") // starts up Scene2

          // creating the sprite animations for each ship
        this.anims.create({
            key: "ship1_anim",
            frames: this.anims.generateFrameNumbers("ship"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship2_anim",
            frames: this.anims.generateFrameNumbers("ship2"),
            frameRate: 20,
            repeat: -1
        });

        this.anims.create({
            key: "ship3_anim",
            frames: this.anims.generateFrameNumbers("ship3"),
            frameRate: 20,
            repeat: -1
        });

        // creating animations for explosion
        this.anims.create({
            key: "explode",
            frames: this.anims.generateFrameNumbers("explosion"),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        });

        // creating animations for powerups
        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 0,
                end: 1
            }),
            frameRate: 20,
            repeat: -1,
        });
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers("power-up", {
                start: 2,
                end: 3
            }),
            frameRate: 20,
            repeat: -1,
        });
        // animation for player
        this.anims.create({
            key: "thrust",
            frames: this.anims.generateFrameNumbers("player"),
            frameRate: 20,
            repeat: -1,
        });
        // animation for beam
        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers("beam"),
            frameRate: 20,
            repeat: -1,
        });
    }
}


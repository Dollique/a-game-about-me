class WorldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc;
        
        if(this.upperImage) {
            this.upperImage = new Image();
            this.upperImage.src = config.upperSrc;
        }
    }

    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage, 0, 0);
    }

    drawUpperImage(ctx) {
        ctx.drawImage(this.upperImage, 0, 0);
    }
}

window.worldMaps = {
    DemoRoom: {
        lowerSrc: '/res/maps/map.png',
        upperSrc: null,
        gameObjects: {
            char: new Person({
                x: 100,
                y: 100,
                width: 150,
                height: 300,
                movingSpeed: 5,
                src: "/res/char/charset.png",
                isPlayerControlled: true
            }),
            npc: new Person({
                x: 400,
                y: 200,
            }),
        }
    },
}
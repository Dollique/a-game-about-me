"use strict";

/* CLASS */

class myGame {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.map = null;
    }

    startGameLoop() {
        const step = () => {
            // Clear Canvas
            this.ctx.clearRect(0, 0, this.canvas.windth, this.canvas.height);

            // Draw Lower Image
            this.map.drawLowerImage(this.ctx);

            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.playerInput.direction
                });
                object.sprite.draw(this.ctx);
            });

            // Draw Upper Image if Exists
            if(this.map.upperImage) {
                this.map.drawUpperImage(this.ctx);
            }

            requestAnimationFrame(() => {
                step();
            });
        }
        step();
    }

    init() {
        this.map = new WorldMap(window.worldMaps.DemoRoom);
        this.playerInput = new PlayerInput()
        this.playerInput.init();
        this.startGameLoop();
    }
}

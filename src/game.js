"use strict";

/* CLASS */

class myGame {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector('.game-canvas');
        this.ctx = this.canvas.getContext('2d');

        this.gameObj = {
            room1: {
                path: "/res/maps/map.png",
                x: 0,
                y: 0
            }
        };
    }

    init() {
        console.log('hello from myGame', this);
    }

    drawgameObject(element) { // will be replaced by Class for Maps
        let x = element.x;
        let y = element.y;
    
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, x, y);
        }
        image.src = element.path;
    }

    handleKeyDown(event) {
        console.log('event triggered');
    
        /* PLAYER MOVEMENT */
    
        if (event.keyCode === 37) {
            // left
            this.gameObj.char.x = this.gameObj.char.x - 10;
        } else if (event.keyCode === 38) {
            // up
            this.gameObj.char.y = this.gameObj.char.y - 10;
        } else if (event.keyCode === 39) {
            // right
            this.gameObj.char.x = this.gameObj.char.x + 10;
    
        } else if (event.keyCode === 40) {
            // down
            this.gameObj.char.y = this.gameObj.char.y + 10;
        }
    }

    createGameLoop() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.drawgameObject(this.gameObj.room1);
        //this.drawgameObject(this.gameObj.char);
        //this.drawgameObject(this.gameObj.item);
    
        const char = new GameObject({
            x: 100,
            y: 100,
            src: "/res/char/char.png"
        });

        const sample = new GameObject({
            x: 400,
            y: 200,
        });

        setTimeout(() => { // TEMPORARY
            char.sprite.draw(this.ctx);
            sample.sprite.draw(this.ctx);
        }, 500);
        
        // REQUEST A NEW FRAME --> CHECK
        //requestAnimationFrame(this.createGameLoop);
    }
}

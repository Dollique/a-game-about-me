class Sprite {
    constructor(config) {

        // set up image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }

        // animation & initial state
        this.animations = config.animations || {
            "idle-down": [[0,0]],
            "idle-up": [[0,1]],
            "idle-left": [[0,0]], // TODO
            "idle-right": [[0,0]], // TODO
            "walk-down": [[1,0], [2,0], [3,0], [0,0]],
            "walk-left": [[0,2], [2,2], [3,2], [0,2]],
            "walk-up": [[1,1], [0,1], [3,1], [0,1]],
            "walk-right": [[1,3], [0,3], [3,3], [0,3]]
        }
        this.currentAnimation = config.currentAnimation || "idle-down";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit || 8; // animation speed (lower = faster)
        this.animationFrameProgress = this.animationFrameLimit;

        // game object
        this.gameObject = config.gameObject;
    }

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if(this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        //Downtick frame progress
        if(this.animationFrameProgress > 0) {
            this.animationFrameProgress -= 1;
            return;
        }

        //Reset counter
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if(this.frame === undefined) {
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;
        const width = this.gameObject.width;
        const height = this.gameObject.height;
        const scaledWidth = this.gameObject.scaledWidth;
        const scaledHeight = this.gameObject.scaledHeight;

        let params = [];

        const [frameX, frameY] = this.frame; // get frame and deconstruct

        if(width && height) {
            params = [
                this.image,
                frameX * width, frameY * height, // left and top cut
                width,height, // width and height of cut in the spritesheet
                x, // x position on the map
                y, // y position on the map
                scaledWidth, // size of the image drawn on the canvas (for resizing)
                scaledHeight  // size of the image drawn on the canvas (for resizing)
            ];
        } else {
            params = [
                this.image,
                x, // x position on the map
                y, // y position on the map
            ];
        }

        this.isLoaded && ctx.drawImage(...params)

        this.updateAnimationProgress();
    }
}
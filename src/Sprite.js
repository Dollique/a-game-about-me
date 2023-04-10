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
            idleDown: [
                [0,0]
            ],
            walkDown: [
                [0,0], [1,0], [2,0], [3,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x;
        const y = this.gameObject.y;

        this.isLoaded && ctx.drawImage(this.image,
            x,y
        )
    }
}
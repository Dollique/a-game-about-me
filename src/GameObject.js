class GameObject {
    constructor(config) {
        this.x = config.x || 0;
        this.y = config.y || 0;

        this.width = config.width || undefined;
        this.height = config.height || undefined;
        
        this.scaledWidth = config.scaledWidth || this.width;
        this.scaledHeight = config.scaledHeight || this.height;
        
        this.direction = config.direction || "down";

        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || '/res/char/sample.png',
        });
    }
}
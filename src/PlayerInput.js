class PlayerInput {
    constructor() {
        this.heldDirection = [];

        this.map = {
            "ArrowLeft":    "left",
            "KeyA":         "left",
            "ArrowRight":   "right",
            "KeyD":         "right",
            "ArrowUp":      "up",
            "KeyW":         "up",
            "ArrowDown":    "down",
            "KeyS":         "down",
        }
    }

    // getter -> call it by using this.direction;
    get direction() {
        return this.heldDirection[0];
    }

    init() {
        // pressing on one or multiple keys
        document.addEventListener('keydown', e => {
            const dir = this.map[e.code];
            if(dir && this.heldDirection.indexOf(dir) === -1) {
                this.heldDirection.unshift(dir); // add a new entry in the first position of the array
            }
        });

        // releasing a key press
        document.addEventListener('keyup', e => {
            const dir = this.map[e.code];
            const index = this.heldDirection.indexOf(dir);
            if(index > -1) {
                this.heldDirection.splice(index, 1); // remove the first entry in the array
            }
        });
    }
}
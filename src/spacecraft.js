class Spacecraft {
    constructor(x, y, z, direction) {
        this.position = [x, y, z];
        this.directions = {
            'N': [0, 1, 0],
            'S': [0, -1, 0],
            'E': [1, 0, 0],
            'W': [-1, 0, 0],
            'Up': [0, 0, 1],
            'Down': [0, 0, -1],
        };
        this.direction = direction;
    }

    move() {
        const forwardDirection = this.directions[this.direction]
        this.position = this.position.map((coord, index) => coord + forwardDirection[index])
    }

    executeCommands(commands) {
        const actions = {
            'f': () => { this.move() }
        }

        for (const command of commands) {
            if (actions.hasOwnProperty(command)) {
                actions[command]()
            }
        }
    }
}

module.exports = Spacecraft
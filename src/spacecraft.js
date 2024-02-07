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

    move(movementVector) {
        this.position = this.position.map((coord, index) => coord + movementVector[index])
    }

    getOppositeDirection() {
        const oppositeDirections = {
            'N': 'S',
            'S': 'N',
            'E': 'W',
            'W': 'E',
            'Up': 'Down',
            'Down': 'Up',
        };

        return oppositeDirections[this.direction];
    }

    executeCommands(commands) {
        const actions = {
            'f': () => {
                const forwardDirection = this.directions[this.direction];
                this.move(forwardDirection);
            },
            'b': () => {
                const backwardDirection = this.directions[this.getOppositeDirection()];
                this.move(backwardDirection);
            }
        }

        for (const command of commands) {
            if (actions.hasOwnProperty(command)) {
                actions[command]()
            }
        }
    }
}

module.exports = Spacecraft
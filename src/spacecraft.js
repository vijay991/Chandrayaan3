class Spacecraft {

    constructor(x, y, z, direction) {
        this.position = [x, y, z];
        this.direction = direction;
    }

    moveForward() {

    }
    executeCommands(commands) {

    }
}

const spacecraft = new Spacecraft(0, 0, 0, 'N');
const commands = ["f", "r", "u", "b", "l"];
spacecraft.executeCommands(commands);
module.exports = Spacecraft;

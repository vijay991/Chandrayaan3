class Spacecraft {

    constructor(x, y, z, direction) {
        this.position = [x, y, z];
        this.direction = direction;
    }

    moveForward() {
        switch (this.direction) {
            case 'N':
                this.position[1]++
                break;
            case 'S':
                this.position[1]--
                break;
            case 'E':
                this.position[0]++
                break;
            case 'W':
                this.position[0]--
                break;
            case 'Up':
                this.position[2]++
                break;
            case 'Down':
                this.position[2]--
                break;
        }
    }
    executeCommands(commands) {

    }
}

const spacecraft = new Spacecraft(0, 0, 0, 'N');
const commands = ["f", "r", "u", "b", "l"];
spacecraft.executeCommands(commands);
module.exports = Spacecraft;

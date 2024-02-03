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

    moveBackward() {
        switch (this.direction) {
            case 'N':
                this.position[1]--;
                break;
            case 'S':
                this.position[1]++;
                break;
            case 'E':
                this.position[0]--;
                break;
            case 'W':
                this.position[0]++;
                break;
            case 'Up':
                this.position[2]--;
                break;
            case 'Down':
                this.position[2]++;
                break;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case 'N':
                this.direction = 'W';
                break;
            case 'S':
                this.direction = 'E';
                break;
            case 'E':
                this.direction = 'N';
                break;
            case 'W':
                this.direction = 'S';
                break;
            case 'Up':
                this.direction = 'N';
                break;
            case 'Down':
                this.direction = 'S';
                break;
        }
    }

    turnRight() {
        switch (this.direction) {
            case 'N':
                this.direction = 'E';
                break;
            case 'S':
                this.direction = 'W';
                break;
            case 'E':
                this.direction = 'S';
                break;
            case 'W':
                this.direction = 'N';
                break;
            case 'Up':
                this.direction = 'S';
                break;
            case 'Down':
                this.direction = 'N';
                break;
        }
    }

    turnUp() {
        if (this.direction !== 'Up' && this.direction !== 'Down') {
            this.direction = 'Up';
        }
    }

    turnDown() {
        if (this.direction !== 'Up' && this.direction !== 'Down') {
            this.direction = 'Down';
        }
    }

    executeCommands(commands) {
        for (const command of commands) {
            switch (command) {
                case 'f':
                    this.moveForward();
                    break;
                case 'b':
                    this.moveBackward();
                    break;
                case 'l':
                    this.turnLeft();
                    break;
                case 'r':
                    this.turnRight();
                    break;
                case 'u':
                    this.turnUp();
                    break;
                case 'd':
                    this.turnDown();
                    break;
            }
        }
    }
}

module.exports = Spacecraft;

const Spacecraft = require('../src/spacecraft');

describe('Spacecraft', () => {

    describe('Test for move forward', () => {
        test.each([
            ['N', [0, 1, 0], 'N'],
            ['S', [0, -1, 0], 'S'],
            ['E', [1, 0, 0], 'E'],
            ['W', [-1, 0, 0], 'W'],
            ['Up', [0, 0, 1], 'Up'],
            ['Down', [0, 0, -1], 'Down'],
        ])('should move forward correctly for direction %s', (initialDirection, expectedPosition, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, initialDirection);
            spacecraft.moveForward();
            expect(spacecraft.position).toEqual(expectedPosition);
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });

    describe('Test for move backward', () => {
        test.each([
            ['N', [0, -1, 0], 'N'],
            ['S', [0, 1, 0], 'S'],
            ['E', [-1, 0, 0], 'E'],
            ['W', [1, 0, 0], 'W'],
            ['Up', [0, 0, -1], 'Up'],
            ['Down', [0, 0, 1], 'Down'],
        ])('should move backward correctly for direction %s', (initialDirection, expectedPosition, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, initialDirection);
            spacecraft.moveBackward();
            expect(spacecraft.position).toEqual(expectedPosition);
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });

    describe('Test for turnLeft', () => {
        test.each([
            ['N', 'W'],
            ['W', 'S'],
            ['S', 'E'],
            ['E', 'N'],
            ['Up', 'N'],
            ['Down', 'S']
        ])('should turn left correctly from direction %s to %s', (initialDirection, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, initialDirection);
            spacecraft.turnLeft();
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });

    describe('Test for turnRight', () => {
        test.each([
            ['N', 'E'],
            ['E', 'S'],
            ['S', 'W'],
            ['W', 'N'],
            ['Up', 'S'],
            ['Down', 'N']
        ])('should turn right correctly from direction %s to %s', (initialDirection, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, initialDirection);
            spacecraft.turnRight();
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });

    describe('Test for turnUp', () => {
        test.each([
            ['N', 'Up'],
            ['S', 'Up'],
            ['E', 'Up'],
            ['W', 'Up'],
            ['Up', 'Up'],
            ['Down', 'Down'],
        ])('should turn up correctly for initial direction %s', (initialDirection, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, initialDirection);
            spacecraft.turnUp();
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });

    describe('Test for turnDown', () => {
        test.each([
            ['N', 'Down'],
            ['S', 'Down'],
            ['E', 'Down'],
            ['W', 'Down'],
            ['Up', 'Up'],
            ['Down', 'Down'],
        ])('should turn down correctly for initial direction %s', (initialDirection, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, initialDirection);
            spacecraft.turnDown();
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });

    describe('Test for executeCommands', () => {
        test.each([
            [['f', 'r', 'u', 'b', 'l'], [0, 1, -1], 'N'],
            [['l', 'l', 'l', 'l'], [0, 0, 0], 'N'],
            [['b', 'b', 'b'], [0, -3, 0], 'N'],
            [['u', 'u', 'u'], [0, 0, 0], 'Up'],
        ])('should execute commands correctly', (commands, expectedPosition, expectedDirection) => {
            const spacecraft = new Spacecraft(0, 0, 0, 'N');
            spacecraft.executeCommands(commands);

            expect(spacecraft.position).toEqual(expectedPosition);
            expect(spacecraft.direction).toBe(expectedDirection);
        });
    });
});

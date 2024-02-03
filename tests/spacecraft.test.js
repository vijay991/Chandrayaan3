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

});

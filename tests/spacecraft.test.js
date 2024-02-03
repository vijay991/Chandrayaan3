const Spacecraft = require('../src/spacecraft');

describe('Spacecraft', () => {
    it('should move forward correctly', () => {
        const spacecraft = new Spacecraft(0, 0, 0, 'N');
        spacecraft.moveForward();
        expect(spacecraft.position).toEqual([0, 1, 0]);
        expect(spacecraft.direction).toBe('N');
    });
});

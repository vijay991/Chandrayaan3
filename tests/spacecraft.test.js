const Spacecraft = require('../src/spacecraft');

describe('Spacecraft', () => {
    let spacecraft;

    beforeEach(() => {
        spacecraft = new Spacecraft(0, 0, 0, 'N');
    });

    test('should initialize with correct position and direction', () => {
        expect(spacecraft.position).toEqual([0, 0, 0]);
        expect(spacecraft.direction).toBe('N');
    });

    test('should move forward correctly', () => {
        spacecraft.executeCommands(['f']);
        expect(spacecraft.position).toEqual([0, 1, 0]);
    });

    test('should move backward correctly', () => {
        spacecraft.executeCommands(['b']);
        expect(spacecraft.position).toEqual([0, -1, 0]);
    });

    test('should turn left correctly', () => {
        spacecraft.executeCommands(['l']);
        expect(spacecraft.direction).toBe('W');
    });

    test('should turn right correctly', () => {
        spacecraft.executeCommands(['r']);
        expect(spacecraft.direction).toBe('E');
    });

    test('should turn up correctly', () => {
        spacecraft.executeCommands(['u']);
        expect(spacecraft.direction).toBe('Up');
    });

    test('should turn down correctly', () => {
        spacecraft.executeCommands(['d']);
        expect(spacecraft.direction).toBe('Down');
    });

    test('should execute multiple commands correctly', () => {
        spacecraft.executeCommands(['f', 'r', 'u', 'b', 'l']);
        expect(spacecraft.position).toEqual([0, 1, -1]);
        expect(spacecraft.direction).toBe('N');
    });
});

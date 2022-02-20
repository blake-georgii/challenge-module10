const Manager = require('../lib/Manager.js');

test('creates an Manager object', () => {
    const manager = new Manager('Dave', 1, 'dave@davemail.com', 1);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('dave@davemail.com');
    expect(manager.officeNumber).toBe(1);
});
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const dave = new Employee('Dave', 1, 'dave@davemail.com');

    expect(dave.name).toBe('Dave');
    expect(dave.id).toBe(1);
    expect(dave.email).toBe('dave@davemail.com');
});
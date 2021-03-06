const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Dave', 1, 'dave@davemail.com');

    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('dave@davemail.com');
});

test('getName() works correctly', () => {
    const employee = new Employee('Dave', 1, 'dave@davemail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Dave'));
});

test('getId() works correctly', () => {
    const employee = new Employee('Dave', 1, 'dave@davemail.com');

    expect(employee.getId()).toEqual(employee.id);
});

test('getEmail() works correctly', () => {
    const employee = new Employee('Dave', 1, 'dave@davemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('dave@davemail.com'));
});

test('getRole() returns "Employee"', () => {
    const employee = new Employee('Dave', 1, 'dave@davemail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});
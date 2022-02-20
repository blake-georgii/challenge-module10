const Intern = require('../lib/Intern.js');

test('creates an Intern object', () => {
    const intern = new Intern('Dave', 1, 'dave@davemail.com', 'dave-school');

    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('dave@davemail.com');
    expect(engineer.school).toBe('dave-school');
});

test('getRole() returns "Intern"', () => {
    const intern = new Intern('Dave', 1, 'dave@davemail.com', 'dave-school');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});
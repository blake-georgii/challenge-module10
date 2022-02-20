const Engineer = require('../lib/Engineer.js');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Dave', 1, 'dave@davemail.com', 'dave-github');

    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('dave@davemail.com');
    expect(engineer.github).toBe('dave-github');
});
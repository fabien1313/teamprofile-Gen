const Employee = require('../lib/engineer');
const employee = new Employee('Fabien', '211446', 'fabienmoreno1331@yahoo.com', 'fabien1313');



test('Does the method getRole() produce the correct role according to the require above?', () => {
    expect(employee.getRole()).toBe('Engineer');
    expect(employee.getGitHub()).not.toBe('Employee');
});


test('Does the new Employee GitHub value equal getGitHub()', () => {
    expect(employee.getGitHub()).toBe('fabien1313');
    expect(employee.getGitHub()).not.toBe('moneyBagYo1');
});


//equal
test('Does the new Employee name value equal .name', () => {
    expect('Fabien').toBe(employee.name);
});

test('Does the new Employee id equal .id', () => {
    expect('211446').toBe(employee.id);
});

test('Does the email value in new Employee equal .email', () => {
    expect('fabienmoreno1331@yahoo.com').toBe(employee.email);
});


//not equal
test('Does the new Employee name value equal .name', () => {
    expect('Sam').not.toBe(employee.name);
});

test('Does the new Employee id equal .id', () => {
    expect('12345').not.toBe(employee.id);
});

test('Does the email value in new Employee equal .email', () => {
    expect('palasadeMontey@yahoo.com').not.toBe(employee.email);
});

//methods
test('Does getName() equal to .name value', () => {
    expect(employee.getName()).toBe('Fabien');
    expect(employee.getName()).not.toBe('Bridget');
    expect(employee.getId()).toBe('211446');
});
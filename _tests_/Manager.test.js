const Employee = require('../lib/manager');
const employee = new Employee('Fabien', '211446', 'fabienmoreno1331@yahoo.com', '102b');



test('Does the method getRole() produce the correct role according to the require above?', () => {
    expect(employee.getRole()).toBe('Manager');
    expect(employee.getRole()).not.toBe('Engineer');
});


test('Does the new Employee office number value equal the Manager getOfficeNumber() method?', () => {
    expect(employee.getOfficeNumber()).toBe('102b');
    expect(employee.getOfficeNumber()).not.toBe('101a');
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
    expect('Diaz').not.toBe(employee.name);
});

test('Does the new Employee id equal .id', () => {
    expect('987654').not.toBe(employee.id);
});

test('Does the email value in new Employee equal .email', () => {
    expect('PaleMale99@aol.com').not.toBe(employee.email);
});

//methods
test('Does getName() equal to .name value', () => {
    expect(employee.getName()).toBe('Fabien');
    expect(employee.getName()).not.toBe('Sandra');
    expect(employee.getId()).toBe('211446');
    expect(employee.getId()).not.toBe('888888')
});
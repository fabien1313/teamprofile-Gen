const Employee = require('../lib/employee');
const employee = new Employee('Fabien', '211446', 'fabienmoreno1331@yahoo.com');



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
    expect('Jeffrey').not.toBe(employee.name);
});

test('Does the new Employee id equal .id', () => {
    expect('911').not.toBe(employee.id);
});

test('Does the email value in new Employee equal .email', () => {
    expect('gravyspoonbubkiss@neverhadanemail.com').not.toBe(employee.email);
});

//methods
test('Does getName() equal to .name value', () => {
    expect(employee.getName()).toBe('Fabien');
    expect(employee.getName()).not.toBe('Timmothy');
    expect(employee.getId()).toBe('211446');
    
});






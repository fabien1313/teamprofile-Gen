const Employee = require('../lib/intern');
const employee = new Employee('Fabien', '211446', 'fabienmoreno1331@yahoo.com', 'University of Texas, Austin');



test('Does the method getRole() produce the correct role according to the require above?', () => {
    expect(employee.getRole()).toBe('Intern');
    expect(employee.getRole()).not.toBe('Manager');
});


test('Does the new Employee school value equal the Intern getSchool() method?', () => {
    expect(employee.getSchool()).toBe('University of Texas, Austin');
    expect(employee.getSchool()).not.toBe('Texas State University');
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
    expect('Pedro').not.toBe(employee.name);
});

test('Does the new Employee id equal .id', () => {
    expect('54321').not.toBe(employee.id);
});

test('Does the email value in new Employee equal .email', () => {
    expect('TonyHawkEye213@gmail.com').not.toBe(employee.email);
});

//methods
test('Does getName() equal to .name value', () => {
    expect(employee.getName()).toBe('Fabien');
    expect(employee.getName()).not.toBe('Beyonce');
    expect(employee.getId()).toBe('211446');
    expect(employee.getId()).not.toBe('644112')
});
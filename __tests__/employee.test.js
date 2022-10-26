const Employee = require('../lib/Employee.classes');
const mockEmployee = new Employee ('Jess', '01', 'jlalmand27@gmail.com');

describe('Employee', () => {
    describe('init', () => {
        it('should create an employee with name, id and email', () => {
            expect(mockEmployee.name).toBe('Jess');
            expect(mockEmployee.id).toBe('01')
            expect(mockEmployee.email).toBe('jlalmand27@gmail.com')
        });
    });
    describe('getName', () => {
        it('should return the value of the name of the new employee', () => {
            expect(mockEmployee.getName()).toBe('Jess');
        });
    });
    describe('getId', () => {
        it('should return the value of the id of the new employee', () => {
            expect(mockEmployee.getId()).toBe('01');
        });
    });
    describe('getEmail', () => {
        it('should return the value of the email of the new employee', () => {
            expect(mockEmployee.getEmail()).toBe('jlalmand27@gmail.com');
        });
    });
    describe('getRole', () => {
        it('should return the value assigned to the given role', () => {
            const role = 'Employee';
            const newRole = new Employee().getRole();
            expect(role).toBe(newRole);
        });
    });
});
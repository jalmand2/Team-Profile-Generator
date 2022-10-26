const Manager = require('../lib/Manager.classes');
const mockEmployee = new Manager ('Jess', '01', 'jlalmand27@gmail.com', '5');

describe('Manager', () => {
    describe('getRole', () => {
        it('should return the role of manager', () => {
            const role = 'Manager';
            const newRole = new Manager().getRole();
            expect(role).toBe(newRole);
        });
    });
    describe('getOfficeNumber', () => {
        it('should return the value of the office number of new manager', () => {
            expect(mockEmployee.getOfficeNumber()).toBe('5');
        });
    });
});
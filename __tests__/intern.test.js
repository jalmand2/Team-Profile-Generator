
const Intern = require('../lib/Intern.classes')
const mockEmployee = new Intern ('Jess', '01', 'jlalmand27@gmail.com', 'UCF');

describe('Intern', () => {
    describe('getRole', () => {
        it('should return the role of intern', () => {
            const role = 'Intern';
            const newRole = new Intern().getRole();
            expect(role).toBe(newRole);
        });
    });
    describe('getSchool', () => {
        it('should return the value of the school of the new intern', () => {
            expect(mockEmployee.getSchool()).toBe('UCF');
        });
    });
});
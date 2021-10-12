const {Student} = require('./index');
const {sequelize} = require('../db');

describe('Student Model', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	test('Student Model exists', async() => {
		expect(Student instanceof Object).toBeTruthy()
	})

	//Remove the x to activate spec
	xtest('Student has a name', async() => {
		const testStudent = await Student.create({name : 'Linda'})
		expect(testStudent.name).toBe('Linda')
	})

	xtest('Student has a subject specialty', async() => {
		const testStudent = await Student.create({name : 'Dan', subject : 'SWE'})
		expect(testStudent.subject).toBe('SWE')
	})


})

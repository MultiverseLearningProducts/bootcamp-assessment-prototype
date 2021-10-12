const request = require('supertest');
const app = require('../app');
const agent = request.agent(app);

const {Student} = require('../models/index');
const {sequelize} = require('../db');



describe('Student API', () => {
	beforeAll(async () => {
		await sequelize.sync({force: true})
	});

	afterAll(done => {
	    done();
	});

	test('Student Model exists', () => {
		expect(Student instanceof Object).toBeTruthy()
	})

	describe('GET /articles', () => {
	   
	    xtest('responds with an array via JSON', async (done) => {

	      const res = await agent
	      .get('/students')
	      .expect('Content-Type', /json/)
	      .expect(200)
	      .end(done);

	      expect(res.body).to.be.an.instanceOf(Array);
	      expect(res.body).to.have.length(0)

	    });
	})
})
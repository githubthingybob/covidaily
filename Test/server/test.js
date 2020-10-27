process.env.TEST = true;

const supertest = require('supertest');
const app = require('../../server/server');
const agent = supertest.agent(app);

const pool = require('../../server/modules/pool');

  test(`should account update for email`, async() => {
    // PUT /user/profile/:id
    let putResponse = await agent
      .put(`/api/user/profile/1`)
      .send({
        email: "testing50@gmail.com"
      });

    expect(putResponse.statusCode).toBe(200);
    // profile email should be updated
    expect(putResponse.body).toMatchObject({
      email: "testing50@gmail.com"
    });
  });
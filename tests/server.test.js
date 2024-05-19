const request = require('supertest');
const app = require('./server');

describe('GET /getData', () => {
  it('responds with JSON data', async () => {
    const response = await request(app).get('/getData');
    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toMatch(/application\/json/);
  });
});

describe('POST /subscribe', () => {
  it('subscribes a new user', async () => {
    const userData = { name: 'Test User', email: 'test@example.com' };
    const response = await request(app)
      .post('/subscribe')
      .send(userData);
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Subscription successful!');
  });
});


describe('Error Handling Middleware', () => {
  it('handles internal server errors', async () => {
    // Mock the request and response objects
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Trigger an internal server error
    await app.post('/subscribe')(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ message: 'Internal Server Error' });
  });
});

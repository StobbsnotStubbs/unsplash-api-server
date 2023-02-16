"use strict";

const server = require("../server");

const supertest = require("supertest"); 
const mockRequest = supertest(server.app);


describe('GET /', () => {
  it('/ route works', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toBe(200);
  });
});

describe('GET /bad', () => {
  it('handles not found request', async () => {
    const response = await mockRequest.get('/bad');
    expect(response.status).toBe(404);
  });
});

describe('POST /randomImage', () => {
  it('respond with a 404 on an invalid method', async () => {
    const response = await mockRequest.post('/randomImage');
    expect(response.status).toBe(404);
  });

  it('responds with status 200 and type is "object"', async () => {
    const response = await mockRequest.get('/randomImage');
    expect(response.status).toBe(200);
    expect(typeof response.body).toBe('object');
  });
});

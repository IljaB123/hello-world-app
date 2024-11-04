const request = require('supertest');
const express = require('express');

const app = require('./app');

describe('Express.js App', () => {
  it('responds with Hello World and status 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });
});

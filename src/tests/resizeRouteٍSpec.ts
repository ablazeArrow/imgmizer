import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('Reaching endpoint', (): void => {
  it('get status code from resize endpoint', async () => {
    const response = await request.get(
      `/api/image?filename=fjord.jpg&width=360&height=200`
    );
    expect<number>(response.status).toBe(200);
  });
});

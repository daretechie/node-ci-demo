const request = require("supertest");
const app = require("./index");
let server;

beforeAll((done) => {
  server = app.listen(0, () => {
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

test("GET / should return Hello, CI/CD, Docker, AWS World!\nHello, World!", async () => {
  const res = await request(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello, CI/CD, Docker, AWS World!\nHello, World!");
});

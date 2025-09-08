const request = require("supertest");
const app = require("./index"); // export app in index.js

test("GET / should return Hello CI/CD World!", async () => {
  const res = await request(app).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.text).toBe("Hello CI/CD World!");
});

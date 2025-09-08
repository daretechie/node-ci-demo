const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, CI/CD, Docker, AWS World!\nHello, World!");
});

module.exports = app;

// describe("GET /", () => {
//   it("should return Hello World", async () => {
//     const response = await request(app).get("/");
//     expect(response.text).toBe("Hello World!");
//     expect(response.status).toBe(200);
//   });
// });

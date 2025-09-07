const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, CI/CD, Docker, AWS World!");
  res.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

// describe("GET /", () => {
//   it("should return Hello World", async () => {
//     const response = await request(app).get("/");
//     expect(response.text).toBe("Hello World!");
//     expect(response.status).toBe(200);
//   });
// });

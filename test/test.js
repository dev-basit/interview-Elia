const app = express();

test("Get endpoint of post", async () => {
  const response = await request(app).get("/post");

  expect(response.status).toBe(200);
});

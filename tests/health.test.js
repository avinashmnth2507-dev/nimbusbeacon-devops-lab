const request = require("supertest");
const app = require("../src/server");

describe("NimbusBeacon health endpoint", () => {
  test("GET /health returns healthy status", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
    expect(response.body.service).toBe("nimbusbeacon");
    expect(response.body.timestamp).toBeDefined();
  });
});

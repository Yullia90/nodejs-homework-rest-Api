// const mongoose = require("mongoose");
// const request = require("supertest");
// require("dotenv").config();
// const app = require("../../app");

// const User = require("../../models/user");

// const { TEST_DB_HOST, PORT = 3000 } = process.env;

// describe("test /api/auth/register", () => {
//     let server = null;
//     beforeAll(async () => {
//         await mongoose.connect(TEST_DB_HOST);
//         server = app.listen(PORT);
//     })

//     afterAll(async () => {
//         await mongoose.connection.close();
//         server.close();
//     })

//     afterEach(async () => {
//         await User.deleteMany({});
//     })

//     test("test register with correctData", async () => {
//         const registerData = {
//           email: "est@utquamvel.net",
//           subscription: "starter",
//           password: "123256"
//         };
//         const { statusCode, body } = (
//           await request(app).post("/api/users/register")
//         ).send(registerData);
//         expect(statusCode).toBe(201);
//         expect(body.email).toBe(registerData.email);
//         expect(body.subscription).toBe(registerData.subscription);

//         const user = await User.findOne({ email: registerData.email });
//         expect(user.subscription).toBe(registerData.subscription);
//     })

// })
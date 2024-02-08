import Joi from "joi";

describe("Joi Validation", () => {
  it("Validation Object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().email().min(3).max(100).required(),
      password: Joi.string().min(3).max(100).required(),
    });

    const request = {
      username: "hello@email.com",
      username: "hello@email.com",
      password: "12345",
    };

    const result = loginSchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });

  it("Validation Nested Object", () => {
    const createUser = Joi.object({
      username: Joi.string().email().min(3).max(100).required(),
      password: Joi.string().min(3).max(100).required(),
      address: Joi.object({
        street: Joi.string().min(3).max(100).required(),
        city: Joi.string().min(3).max(100).required(),
        country: Joi.string().min(3).max(100).required(),
      }),
    });

    const request = {
      username: "hello@email.com",
      password: "12345",
      address: {
        street: "Earth St.",
        city: "Earth Town",
        country: "Earth",
      },
    };

    const result = createUser.validate(request, {
      abortEarly: false,
    });

    console.info(result);
    console.info(JSON.stringify(result));
  });
});

import Joi from "joi";

describe("Joi Validation", () => {
  it("Validation Array", () => {
    const arraySchema = Joi.array().items(Joi.string().min(3).max(100)).required();

    const request = ["abc", "def", "ghi"];

    const result = arraySchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
  });

  it("Validation Array of Object", () => {
    const arraySchema = Joi.array()
      .items(
        Joi.object({
          street: Joi.string().min(3).max(100).required(),
          city: Joi.string().min(3).max(100).required(),
          country: Joi.string().min(3).max(100).required(),
        })
      )
      .required();

    const request = [
      {
        street: "Earth St.",
        city: "Earth Town",
        country: "Earth",
      },
      {
        street: "Mercury St.",
        city: "Mercury Town",
        country: "Mercury",
      },
    ];

    const result = arraySchema.validate(request, {
      abortEarly: false,
    });

    console.info(result);
    console.info(JSON.stringify(result));
  });
});

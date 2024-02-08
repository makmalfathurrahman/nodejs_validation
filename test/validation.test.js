import Joi from "joi";

describe("Joi Validation", () => {
  it("Joi Validation with Schema", () => {
    const schema = Joi.string().min(3).max(10).required();

    const result = schema.validate("one");
    if (result.error) {
      console.info(result.error);
    }

    console.info(JSON.stringify(result));
  });
});

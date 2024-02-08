import Joi from "joi";

describe("Joi Validation", () => {
  it("Validation Result", () => {
    const schema = Joi.string().min(3).max(10).required();
    const result = schema.validate("one");

    console.info(result.value);
    console.info(result.error);
    console.info(JSON.stringify(result));
  });
});

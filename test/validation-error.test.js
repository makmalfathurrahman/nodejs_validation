import Joi from "joi";

describe("Joi Validation", () => {
  it("Validation Error", () => {
    const schema = Joi.string().min(3).max(10).required();
    const result = schema.validate("on", { abortEarly: false });

    console.info(result.value);
    console.info(result.error);
    if (result.error) {
      result.error.details.forEach((detail) => {
        console.info(`${detail.path} = ${detail.message}`);
      });
    }
  });
});

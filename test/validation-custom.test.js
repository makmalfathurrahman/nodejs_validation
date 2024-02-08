import Joi from "joi";

describe("Joi Validation", () => {
  it("Validation with Custom Messages", () => {
    const schema = Joi.string().min(3).max(10).required().messages({
      "string.min": "{{#label}} has to be minimum {{#limit}} character",
    });

    const result = schema.validate("on");
    if (result.error) {
      console.info(result.error);
    }

    console.info(JSON.stringify(result));
  });
});

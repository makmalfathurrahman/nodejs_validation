import Joi from "joi";

describe("Joi Data Type Validation", () => {
  it("String Data Type Validation", () => {
    const usernameSchema = Joi.string().email().required();
    const usernameResult = usernameSchema.validate("hello@email.com");
    console.info(usernameResult);
    console.info(JSON.stringify(usernameResult));
  });

  it("Boolean Data Type Validation", () => {
    const authSchema = Joi.boolean().required();
    const authResult = authSchema.validate("true");
    console.info(authResult);
    console.info(JSON.stringify(authResult));
  });

  it("Number Data Type Validation", () => {
    const priceSchema = Joi.number().min(10).max(100).required();
    const priceResult = priceSchema.validate("50");
    console.info(priceResult);
    console.info(JSON.stringify(priceResult));
  });

  it("Date Data Type Validation", () => {
    const dateSchema = Joi.date().required();
    const dateResult = dateSchema.validate("02-08-2024");
    console.info(dateResult);
    console.info(JSON.stringify(dateResult));
  });
});

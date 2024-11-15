const stringCalculator = require("./stringCalculator");

const typeOfParameter = (container, value) => {
  const output = container(value);

  if (typeof value !== "string") {
    return {
      pass: false,
      message: `The function with parameters ${value} does not have a type of string`,
    };
  }
  return {
    pass: true,
  };
};

expect.extend({ typeOfParameter });

test("test the argument if is it a string or not", () => {
  stringCalculator();
  expect(stringCalculator).typeOfParameter("1, 2");
});


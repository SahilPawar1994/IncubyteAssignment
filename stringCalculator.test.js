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

test("test the stringCalculator if it is returning undefined if arguments are not given", () => {
    const output = stringCalculator();

    expect(typeof output).toEqual("undefined");
})

test("test the stringCalculator if it is returning an number if string is given as args", () => {

    const output = stringCalculator("1");

    expect(typeof output).toBe("number");
})

test("test the stringCalculator if it is returning an number if type of args !== string", () => {

    const output = stringCalculator(true);

    expect(output).toBe(undefined);
})


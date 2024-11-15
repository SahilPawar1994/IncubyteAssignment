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

test("test the stringCalculator if it is adding a value when we pass '1,2' and returning 3", () => {

    const output = stringCalculator("1,2");

    expect(output).toBe(3);
})

test("test the stringCalculator if it is adding a value when we pass '99;15' and returning 114", () => {

    const output = stringCalculator('99;15');

    expect(output).toBe(114);
})

test("test the stringCalculator if it is adding a value when we pass '23:45' and returning 68", () => {

    const output = stringCalculator('23:45');

    expect(output).toBe(68);
})

test("test the stringCalculator if it is adding a value when we pass '5/n8' and returning 13", () => {

    const output = stringCalculator('5/n8');

    expect(output).toBe(13);
})

test("test the stringCalculator if it is adding a value when we pass '' and returning 0", () => {

    const output = stringCalculator('');

    expect(output).toBe(0);
})

test("test the stringCalculator with multiple delimiters input: '2,3:4;5/n6' and output: ", () => {

    const output = stringCalculator('2,3:4;5/n6');

    expect(output).toBe(20);
})
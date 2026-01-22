type RulesObject = { [key: string]: Validator };
type Validator = (value: unknown, errorMessage?: string) => string | boolean;

export const CommonRules: RulesObject = {
  empty(value, errorMessage = "Value cannot be empty.") {
    if (!value) {
      return errorMessage;
    }

    return true;
  },
  isNumber(value, errorMessage = "Value must be a number.") {
    const numberPattern = /^[0-9]+?.?[0-9]+$/;

    if (typeof value === "number") {
      return true;
    }

    if (typeof value === "string" && numberPattern.test(value)) {
      return true;
    }

    return errorMessage;
  },
};

export const NumberRules: RulesObject = {};

export const IntegerRules: RulesObject = {};

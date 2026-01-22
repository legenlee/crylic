import {
  numberPattern,
  integerPattern,
  decimalPattern,
  positiveNumberPattern,
  negativeNumberPattern,
} from "./patterns";

type Validator = (value: unknown, errorMessage?: string) => string | boolean;

type CommonRules = Record<"notEmpty" | "number", Validator>;
type NumberRules = Record<
  "integer" | "decimal" | "positive" | "negative" | "zero",
  Validator
>;

export const commonRules: CommonRules = {
  notEmpty: (value, errorMessage = "This field cannot be empty.") => {
    if (!value) {
      return errorMessage;
    }

    if (typeof value === "string" && value.length === 0) {
      return errorMessage;
    }

    return true;
  },
  number(value, errorMessage = "This field must be a number.") {
    if (typeof value === "string" && numberPattern.test(value)) {
      return true;
    }

    if (typeof value === "number") {
      return true;
    }

    return errorMessage;
  },
};

export const numberRules: NumberRules = {
  integer(value, errorMessage = "This field must be a integer.") {
    if (typeof value === "string" && integerPattern.test(value)) {
      return true;
    }

    if (typeof value === "number" && Number.isInteger(value)) {
      return true;
    }

    return errorMessage;
  },
  decimal(value, errorMessage = "This field must be a decimal.") {
    if (typeof value === "string" && decimalPattern.test(value)) {
      return true;
    }

    if (typeof value === "number" && value % 1 !== 0) {
      return true;
    }

    return errorMessage;
  },
  positive(value, errorMessage = "This field must be a positive number.") {
    if (typeof value === "string" && positiveNumberPattern.test(value)) {
      return true;
    }

    if (typeof value === "number" && value > 0) {
      return true;
    }

    return errorMessage;
  },
  negative(value, errorMessage = "This field must be a negative number.") {
    if (typeof value === "string" && negativeNumberPattern.test(value)) {
      return true;
    }

    if (typeof value === "number" && value < 0) {
      return true;
    }

    return errorMessage;
  },
  zero(value, errorMessage = "This field must be the zero.") {
    if (typeof value === "string" && value === "0") {
      return true;
    }

    if (typeof value === "number" && value === 0) {
      return true;
    }

    return errorMessage;
  },
};

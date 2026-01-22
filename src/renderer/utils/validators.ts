import { numberPattern, integerPattern, decimalPattern } from "./patterns";

type RulesObject = { [key: string]: Validator };
type Validator = (value: unknown, errorMessage?: string) => string | boolean;

export const commonRules: RulesObject = {
  notEmpty(value, errorMessage = "Value cannot be empty.") {
    if (!value) {
      return errorMessage;
    }

    if (typeof value === "string" && value.length === 0) {
      return errorMessage;
    }

    return true;
  },
  number(value, errorMessage = "Value must be a number.") {
    if (typeof value === "string" && numberPattern.test(value)) {
      return true;
    }

    if (typeof value === "number") {
      return true;
    }

    return errorMessage;
  },
};

export const numberRules: RulesObject = {
  integer(value, errorMessage = "Value must be a integer") {
    if (typeof value === "string" && integerPattern.test(value)) {
      return true;
    }

    if (typeof value === "number" && Number.isInteger(value)) {
      return true;
    }

    return errorMessage;
  },
  decimal(value, errorMessage = "Value must be a decimal") {
    if (typeof value === "string" && decimalPattern.test(value)) {
      return true;
    }

    if (typeof value === "number" && value % 1 !== 0) {
      return true;
    }

    return errorMessage;
  },
};

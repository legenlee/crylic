export function required(value: string) {
  if (value.length < 1) {
    return "This field is required.";
  }

  return true;
}

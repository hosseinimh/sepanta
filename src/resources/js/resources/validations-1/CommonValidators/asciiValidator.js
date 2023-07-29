import stringValidator from "./stringValidator";
import { useLSLocale } from "../../../hooks";

const asciiValidator = (schema, field, min = 2, max = 50, required = true) => {
  const { validation } = useLSLocale();
  const regex = required ? /^[a-zA-Z ]+$/ : /^[a-zA-Z ]*$/;
  return stringValidator(schema, field, min, max, required).matches(
    regex,
    validation.asciiStringMessage.replace(":field", field)
  );
};

export default asciiValidator;

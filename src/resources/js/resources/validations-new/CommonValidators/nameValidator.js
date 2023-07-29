import stringValidator from "./stringValidator";
import { useLSLocale } from "../../../hooks";

const nameValidator = (schema, field, min = 2, max = 50, required = true) => {
  const { general, validation } = useLSLocale();
  const regex = required
    ? general.locale === "english"
      ? /^[a-zA-Z ]+$/
      : /^[آ-ی ]+$/
    : general.locale === "english"
    ? /^[a-zA-Z ]*$/
    : /^[آ-ی ]*$/;
  return stringValidator(schema, field, min, max, required).matches(
    regex,
    validation.stringMessage.replace(":field", field)
  );
};

export default nameValidator;

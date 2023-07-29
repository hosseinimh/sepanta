import * as yup from "yup";

import { emailValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { forgotPasswordPage: strings } = useLSLocale();

const forgotPasswordSchema = yup.object().shape({
  email: emailValidator(yup.string(), strings.email),
});

export default forgotPasswordSchema;

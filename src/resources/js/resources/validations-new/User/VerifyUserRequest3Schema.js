import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { verifyUserRequestPage: strings } = useLSLocale();

const verifyUserRequest3Schema = yup.object().shape({
  selfieFile: stringValidator(yup.string(), strings.selfieFile, 5, 300),
  identityFile: stringValidator(yup.string(), strings.identityFile, 5, 300),
});

export default verifyUserRequest3Schema;

import * as yup from "yup";

import {
  mobileValidator,
  stringValidator,
  telValidator,
} from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { verifyUserRequestPage: strings } = useLSLocale();

const verifyUserRequest2Schema = yup.object().shape({
  mobile: mobileValidator(yup.string(), strings.mobile),
  tel: telValidator(yup.string(), strings.tel),
  address: stringValidator(yup.string(), strings.address, 20, 300),
});

export default verifyUserRequest2Schema;

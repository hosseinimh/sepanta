import * as yup from "yup";

import {
  dateValidator,
  nameValidator,
  nationalNoValidator,
  numberValidator,
} from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { verifyUserRequestPage: strings } = useLSLocale();

const verifyUserRequest1Schema = yup.object().shape({
  name: nameValidator(yup.string(), strings.name, 2, 50),
  family: nameValidator(yup.string(), strings.family, 2, 50),
  fatherName: nameValidator(yup.string(), strings.fatherName, 2, 50),
  nationalNo: nationalNoValidator(yup.string(), strings.nationalNo),
  identityNo: numberValidator(
    yup.number(),
    strings.identityNo,
    0,
    Math.pow(10, 10) - 1
  ),
  birthDate: dateValidator(yup.string(), strings.birthDate),
  gender: numberValidator(yup.number(), strings.gender, 1, 2),
});

export default verifyUserRequest1Schema;

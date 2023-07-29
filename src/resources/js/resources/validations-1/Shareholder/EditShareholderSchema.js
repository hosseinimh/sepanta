import * as yup from "yup";

import {  stringValidator,numberValidator ,nationalCodeValidator, nameValidator} from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editShareholdersPage: strings } = useLSLocale();

const editShareholderSchema = yup.object().shape({
  name: nameValidator(yup.string(), strings.name, 3, 50),
  family: nameValidator(yup.string(), strings.family, 3, 50),
  fatherName: nameValidator(yup.string(), strings.fatherName, 3, 50),
  nationalCode: nationalCodeValidator(yup.string(), strings.nationalCode),
  identityNo: numberValidator(yup.number(), strings.identityNo, 1, 99999999),
  postalCode: numberValidator(yup.number(), strings.postalCode, 1, 99999999),
  village: stringValidator(yup.string(), strings.village, 3, 50),
  mobile: numberValidator(yup.number(), strings.mobile, 1, 99999999),
  tel: numberValidator(yup.number(), strings.tel, 1, 99999999),
});

export default editShareholderSchema;
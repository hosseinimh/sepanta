import * as yup from "yup";

import {  stringValidator,numberValidator ,nationalCodeValidator, nameValidator} from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editShareholderRelationshipsPage: strings } = useLSLocale();

const editShareholderRelationshipSchema = yup.object().shape({
  name: nameValidator(yup.string(), strings.name, 3, 50),
  family: nameValidator(yup.string(), strings.family, 3, 50),
  nationalCode: nationalCodeValidator(yup.string(), strings.nationalCode),
  identityNo: numberValidator(yup.number(), strings.identityNo, 1, 99999999),
  mobile: numberValidator(yup.number(), strings.mobile, 1, 99999999),
  shareholderRelationship: stringValidator(yup.string(), strings.shareholderRelationship, 3, 50),
  tel: numberValidator(yup.number(), strings.tel, 1, 99999999),
});

export default editShareholderRelationshipSchema;




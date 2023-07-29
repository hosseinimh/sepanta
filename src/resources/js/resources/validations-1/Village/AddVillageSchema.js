import * as yup from "yup";

import {  stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { addvillagesPage: strings } = useLSLocale();

const addVillageSchema = yup.object().shape({
  section: stringValidator(yup.string(), strings.section, 3, 50),
  village: stringValidator(yup.string(), strings.village, 3, 50),
});

export default addVillageSchema;

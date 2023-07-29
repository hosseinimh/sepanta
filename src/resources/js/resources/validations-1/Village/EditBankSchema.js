import * as yup from "yup";

import {  stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editvillagesPage: strings } = useLSLocale();

const editVillageSchema = yup.object().shape({
  section: stringValidator(yup.string(), strings.section, 3, 50),
  village: stringValidator(yup.string(), strings.village, 3, 50),
});

export default editVillageSchema;
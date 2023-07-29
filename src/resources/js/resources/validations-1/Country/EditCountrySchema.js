import * as yup from "yup";

import {  stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editCountriesPage: strings } = useLSLocale();

const editCountrySchema = yup.object().shape({
  country: stringValidator(yup.string(), strings.country, 3, 50),
});

export default editCountrySchema;

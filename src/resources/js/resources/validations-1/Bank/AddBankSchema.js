import * as yup from "yup";

import {  stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { addBanksPage: strings } = useLSLocale();

const addBankSchema = yup.object().shape({
  bank: stringValidator(yup.string(), strings.bank, 3, 50),
});

export default addBankSchema;

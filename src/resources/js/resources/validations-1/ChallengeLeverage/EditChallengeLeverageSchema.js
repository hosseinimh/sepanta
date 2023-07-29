import * as yup from "yup";

import { numberValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editChallengeLeveragePage: strings } = useLSLocale();

const editChallengeLeverageSchema = yup.object().shape({
  value: numberValidator(yup.number(), strings.value, 50, 1000),
});

export default editChallengeLeverageSchema;

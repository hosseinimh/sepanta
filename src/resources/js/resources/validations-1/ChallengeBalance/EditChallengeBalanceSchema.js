import * as yup from "yup";

import { numberValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editChallengeBalancePage: strings } = useLSLocale();

const editChallengeBalanceSchema = yup.object().shape({
  value: numberValidator(yup.number(), strings.value, 1000, 50000),
});

export default editChallengeBalanceSchema;

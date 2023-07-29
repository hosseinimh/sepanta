import * as yup from "yup";

import { numberValidator } from "../CommonValidators";
import utils from "../../../utils/Utils";

const { addChallengeBalancePage: strings } = utils.getLSLocale();

const addChallengeBalanceSchema = yup.object().shape({
  value: numberValidator(yup.number(), strings.value, 1000, 50000),
});

export default addChallengeBalanceSchema;

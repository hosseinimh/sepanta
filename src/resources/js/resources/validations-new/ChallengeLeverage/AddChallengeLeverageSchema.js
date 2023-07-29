import * as yup from "yup";

import { numberValidator } from "../CommonValidators";
import utils from "../../../utils/Utils";

const { addChallengeLeveragePage: strings } = utils.getLSLocale();

const addChallengeLeverageSchema = yup.object().shape({
  value: numberValidator(yup.number(), strings.value, 50, 1000),
});

export default addChallengeLeverageSchema;

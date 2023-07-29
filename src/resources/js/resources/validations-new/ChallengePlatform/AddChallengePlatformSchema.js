import * as yup from "yup";

import { asciiValidator } from "../CommonValidators";
import utils from "../../../utils/Utils";

const { addChallengePlatformPage: strings } = utils.getLSLocale();

const addChallengePlatformSchema = yup.object().shape({
  value: asciiValidator(yup.string(), strings.value, 3, 50),
});

export default addChallengePlatformSchema;

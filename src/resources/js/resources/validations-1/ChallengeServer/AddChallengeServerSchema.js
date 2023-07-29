import * as yup from "yup";

import { asciiValidator, stringValidator } from "../CommonValidators";
import utils from "../../../utils/Utils";

const { addChallengeServerPage: strings } = utils.getLSLocale();

const addChallengeServerSchema = yup.object().shape({
  name: asciiValidator(yup.string(), strings.name, 3, 50),
  title: stringValidator(yup.string(), strings.title, 3, 50),
});

export default addChallengeServerSchema;

import * as yup from "yup";

import { asciiValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editChallengePlatformPage: strings } = useLSLocale();

const editChallengePlatformSchema = yup.object().shape({
  value: asciiValidator(yup.string(), strings.value, 3, 50),
});

export default editChallengePlatformSchema;

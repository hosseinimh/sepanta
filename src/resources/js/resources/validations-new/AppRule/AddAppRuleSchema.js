import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import utils from "../../../utils/Utils";

const { addAppRulePage: strings } = utils.getLSLocale();

const addAppRuleSchema = yup.object().shape({
    title: stringValidator(yup.string(), strings.title, 6, 200),
    body: stringValidator(yup.string(), strings.body, 6, 2000),
});

export default addAppRuleSchema;

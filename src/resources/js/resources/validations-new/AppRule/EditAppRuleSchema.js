import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editAppRulePage: strings } = useLSLocale();

const editAppRuleSchema = yup.object().shape({
    title: stringValidator(yup.string(), strings.title, 6, 200),
    body: stringValidator(yup.string(), strings.body, 6, 2000),
});

export default editAppRuleSchema;

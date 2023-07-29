import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { addCampaignPage: strings } = useLSLocale();

const addCampaignSchema = yup.object().shape({
    title: stringValidator(yup.string(), strings.title, 6, 200),
});

export default addCampaignSchema;

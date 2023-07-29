import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editCampaignPage: strings } = useLSLocale();

const editCampaignSchema = yup.object().shape({
    title: stringValidator(yup.string(), strings.title, 6, 200),
});

export default editCampaignSchema;

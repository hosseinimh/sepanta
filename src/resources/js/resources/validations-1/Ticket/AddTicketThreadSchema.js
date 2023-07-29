import * as yup from "yup";

import utils from "../../../utils/Utils";
import { stringValidator } from "../CommonValidators";

const { ticketThreadsPage: strings } = utils.getLSLocale();

const addTicketThreadSchema = yup.object().shape({
  content: stringValidator(yup.string(), strings.content, 10, 1000),
});

export default addTicketThreadSchema;

import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import utils from "../../../utils/Utils";

const { loginUserPage: strings } = utils.getLSLocale();

const loginUserSchema = yup.object().shape({
    username: stringValidator(yup.string(), strings.username, 6, 50),
    password: stringValidator(yup.string(), strings.password, 6, 50),
});

export default loginUserSchema;

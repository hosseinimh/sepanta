import * as yup from "yup";

import { stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { changePasswordUserPage: strings, validation } = useLSLocale();

const changePasswordUserSchema = yup.object().shape({
    newPassword: stringValidator(yup.string(), strings.newPassword, 6, 50),
    confirmPassword: stringValidator(
        yup.string(),
        strings.confirmPassword
    ).oneOf(
        [yup.ref("newPassword")],
        validation.confirmedMessage.replace(":field", strings.newPassword)
    ),
});

export default changePasswordUserSchema;

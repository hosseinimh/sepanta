import * as yup from "yup";

import {
    emailValidator,
    nameValidator,
    stringValidator,
} from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { addUserPage: strings, validation } = useLSLocale();

const addUserSchema = yup.object().shape({
    username: stringValidator(yup.string(), strings.username, 6, 50),
    password: stringValidator(yup.string(), strings.password, 6, 50),
    confirmPassword: stringValidator(
        yup.string(),
        strings.confirmPassword
    ).oneOf(
        [yup.ref("password")],
        validation.confirmedMessage.replace(":field", strings.password)
    ),
    email: emailValidator(yup.string(), strings.email),
    name: nameValidator(yup.string(), strings.name, 2, 50),
    family: nameValidator(yup.string(), strings.family, 2, 50),
});

export default addUserSchema;

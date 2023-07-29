import * as yup from "yup";

import { emailValidator, nameValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { editUserPage: strings } = useLSLocale();

const editUserSchema = yup.object().shape({
    name: nameValidator(yup.string(), strings.name, 2, 50),
    family: nameValidator(yup.string(), strings.family, 2, 50),
    email: emailValidator(yup.string(), strings.email),
});

export default editUserSchema;

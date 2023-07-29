import * as yup from "yup";

import { nameValidator, stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { usersPage: strings } = useLSLocale();

const searchUserSchema = yup.object().shape({
    username: stringValidator(yup.string(), strings.username, null, 50, false),
    nameFamily: nameValidator(
        yup.string(),
        strings.nameFamily,
        null,
        50,
        false
    ),
    email: stringValidator(yup.string(), strings.email, null, 50, false),
});

export default searchUserSchema;

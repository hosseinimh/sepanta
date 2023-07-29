import * as yup from "yup";

import {  stringValidator } from "../CommonValidators";
import { useLSLocale } from "../../../hooks";

const { addRelationshipsPage: strings } = useLSLocale();

const addRelationshipSchema = yup.object().shape({
  relationship: stringValidator(yup.string(), strings.relationship, 3, 50),
});

export default addRelationshipSchema;
